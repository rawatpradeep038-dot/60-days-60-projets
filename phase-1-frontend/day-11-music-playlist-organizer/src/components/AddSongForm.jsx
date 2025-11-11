import React, { useState } from 'react';
import { genres } from '../utils/sampleSongs';

function AddSongForm({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: 'Pop',
    duration: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.artist.trim()) return;

    onAdd({
      id: Date.now().toString(),
      ...formData
    });

    setFormData({ title: '', artist: '', genre: 'Pop', duration: '' });
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="add-btn">
        + Add Song
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Song title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="input"
        autoFocus
      />
      <input
        type="text"
        placeholder="Artist name"
        value={formData.artist}
        onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
        className="input"
      />
      <select
        value={formData.genre}
        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        className="select"
      >
        {genres.filter(g => g !== 'All').map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Duration (e.g., 3:45)"
        value={formData.duration}
        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
        className="input"
      />
      <div className="form-actions">
        <button type="submit" className="btn-submit">Add</button>
        <button type="button" onClick={() => setIsOpen(false)} className="btn-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddSongForm;