import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getBPMCategory } from '../utils/sampleData';

function SongCard({ song, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  const bpmInfo = getBPMCategory(song.bpm);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`song-card ${isDragging ? 'dragging' : ''}`}
    >
      <div className="drag-handle" {...attributes} {...listeners}>
        <span className="drag-icon">⋮⋮</span>
      </div>
      
      <div className="song-info">
        <div className="song-title">{song.title}</div>
        <div className="song-artist">{song.artist}</div>
      </div>
      
      <div className="song-meta">
        <span className="duration">{song.duration}</span>
        <span className="bpm" style={{ color: bpmInfo.color }}>
          {song.bpm} BPM
        </span>
        <span className="genre">{song.genre}</span>
      </div>
      
      <button onClick={() => onDelete(song.id)} className="delete-btn">
        ×
      </button>
    </div>
  );
}

export default SongCard;