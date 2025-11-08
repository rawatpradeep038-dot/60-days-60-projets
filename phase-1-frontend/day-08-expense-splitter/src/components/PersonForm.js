import React, { useState } from 'react';

function PersonForm({ onAddPerson }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onAddPerson({
      id: Date.now().toString(),
      name: name.trim()
    });
    
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add person name..."
        className="input"
        maxLength={20}
      />
      <button type="submit" className="btn-primary">
        Add Person
      </button>
    </form>
  );
}

export default PersonForm;