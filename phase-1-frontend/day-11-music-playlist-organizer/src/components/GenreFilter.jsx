import React from 'react';
import { genres } from '../utils/sampleSongs';

function GenreFilter({ selected, onSelect }) {
  return (
    <div className="genre-filter">
      {genres.map(genre => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`genre-btn ${selected === genre ? 'active' : ''}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;