import React, { useState } from 'react';

function AddSongForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    duration: '',
    bpm: '',
    genre: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.artist || !formData.bpm) {
      alert('Please fill required fields');
      return;
    }

    onAdd({
      id: Date.now().toString(),
      ...formData,
      bpm: parseInt(formData.bpm)
    });

    setFormData({ title: '', artist: '', duration: '', bpm: '', genre: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Song title *"
        className="input"
        required
      />
      
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        placeholder="Artist *"
        className="input"
        required
      />
      
      <div className="input-row">
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration (3:20)"
          className="input"
        />
        
        <input
          type="number"
          name="bpm"
          value={formData.bpm}
          onChange={handleChange}
          placeholder="BPM *"
          className="input"
          min="60"
          max="200"
          required
        />
        
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="input"
        />
      </div>
      
      <button type="submit" className="btn-add">
        Add Song
      </button>
    </form>
  );
}

export default AddSongForm;