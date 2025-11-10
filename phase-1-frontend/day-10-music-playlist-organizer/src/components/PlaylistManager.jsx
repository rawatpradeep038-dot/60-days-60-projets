import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import SongCard from './SongCard';
import AddSongForm from './AddSongForm';
import { sampleSongs } from '../utils/sampleData';

function PlaylistManager() {
  const [songs, setSongs] = useState(sampleSongs);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSongs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleAddSong = (song) => {
    setSongs([...songs, song]);
  };

  const handleDeleteSong = (id) => {
    setSongs(songs.filter((s) => s.id !== id));
  };

  const avgBPM = songs.length > 0
    ? Math.round(songs.reduce((sum, s) => sum + s.bpm, 0) / songs.length)
    : 0;

  const totalDuration = songs.reduce((total, song) => {
    const [min, sec] = song.duration.split(':').map(Number);
    return total + (min * 60) + sec;
  }, 0);

  const formatTotalDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="playlist-manager">
      <div className="stats">
        <div className="stat-card">
          <div className="stat-label">Total Songs</div>
          <div className="stat-value">{songs.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg BPM</div>
          <div className="stat-value">{avgBPM}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Duration</div>
          <div className="stat-value">{formatTotalDuration(totalDuration)}</div>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Add New Song</h3>
        <AddSongForm onAdd={handleAddSong} />
      </div>

      <div className="section">
        <h3 className="section-title">Your Playlist (Drag to Reorder)</h3>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={songs.map((s) => s.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="song-list">
              {songs.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  onDelete={handleDeleteSong}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default PlaylistManager;