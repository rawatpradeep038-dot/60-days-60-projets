// ============================================
// HABIT FORM COMPONENT
// Add new habits
// ============================================

import React, { useState } from 'react';

const HABIT_ICONS = ['🏃', '📚', '💧', '🧘', '🎨', '💪', '🥗', '😴', '📝', '🎯'];

function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('🎯');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!habitName.trim()) return;
    
    onAddHabit({
      id: Date.now().toString(),
      name: habitName.trim(),
      icon: selectedIcon,
      completedDates: [],
      createdAt: new Date().toISOString()
    });
    
    setHabitName('');
    setSelectedIcon('🎯');
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <button 
        className="add-habit-button"
        onClick={() => setShowForm(true)}
      >
        ➕ Add New Habit
      </button>
    );
  }

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Habit Name</label>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="e.g., Morning Exercise"
          className="habit-input"
          autoFocus
          maxLength={30}
        />
      </div>

      <div className="form-group">
        <label>Choose Icon</label>
        <div className="icon-selector">
          {HABIT_ICONS.map(icon => (
            <button
              key={icon}
              type="button"
              className={`icon-option ${selectedIcon === icon ? 'selected' : ''}`}
              onClick={() => setSelectedIcon(icon)}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          ✅ Add Habit
        </button>
        <button 
          type="button" 
          className="cancel-button"
          onClick={() => setShowForm(false)}
        >
          ❌ Cancel
        </button>
      </div>
    </form>
  );
}

export default HabitForm;