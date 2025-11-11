import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SongCard from './components/SongCard';
import AddSongForm from './components/AddSongForm';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import { sampleSongs } from './utils/sampleSongs';
import './styles/App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('playlist');
    if (saved) {
      setSongs(JSON.parse(saved));
    } else {
      setSongs(sampleSongs);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(songs));
  }, [songs]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSongs((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleAddSong = (song) => {
    setSongs([...songs, song]);
  };

  const handleDeleteSong = (id) => {
    setSongs(songs.filter(s => s.id !== id));
  };

  // Filter songs
  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || song.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const totalDuration = () => {
    const total = filteredSongs.reduce((acc, song) => {
      const [min, sec] = song.duration.split(':').map(Number);
      return acc + min * 60 + sec;
    }, 0);
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <h1 className="title">🎵 Music Playlist</h1>
          <p className="subtitle">Organize your favorite songs</p>
        </header>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <GenreFilter selected={selectedGenre} onSelect={setSelectedGenre} />

        <div className="stats">
          <div className="stat">
            <span className="stat-value">{filteredSongs.length}</span>
            <span className="stat-label">Songs</span>
          </div>
          <div className="stat">
            <span className="stat-value">{totalDuration()}</span>
            <span className="stat-label">Duration</span>
          </div>
        </div>

        <AddSongForm onAdd={handleAddSong} />

        {filteredSongs.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">🎼</div>
            <p>No songs found</p>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={filteredSongs.map(s => s.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="playlist">
                {filteredSongs.map((song) => (
                  <SongCard
                    key={song.id}
                    song={song}
                    onDelete={handleDeleteSong}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}

export default App;