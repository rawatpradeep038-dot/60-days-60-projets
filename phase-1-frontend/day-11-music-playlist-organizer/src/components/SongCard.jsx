import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SongCard({ song, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="song-card"
    >
      <div className="song-icon">🎵</div>
      <div className="song-info">
        <div className="song-title">{song.title}</div>
        <div className="song-artist">{song.artist}</div>
      </div>
      <div className="song-meta">
        <span className="song-genre">{song.genre}</span>
        <span className="song-duration">{song.duration}</span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(song.id);
        }}
        className="delete-btn"
      >
        ×
      </button>
    </div>
  );
}

export default SongCard;