import React, { useState, useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitCard from './components/HabitCard';
import Calendar from './components/Calendar';
import Statistics from './components/Statistics';
import { getTodayString } from './utils/dateHelpers';
import './styles/App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);

  // Load habits from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('habits');
    if (saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  // Save habits to localStorage
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleAddHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const handleToggleToday = (habitId) => {
    const today = getTodayString();
    
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const isCompleted = habit.completedDates.includes(today);
        
        return {
          ...habit,
          completedDates: isCompleted
            ? habit.completedDates.filter(d => d !== today)
            : [...habit.completedDates, today]
        };
      }
      return habit;
    }));
  };

  const handleDeleteHabit = (habitId) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      setHabits(habits.filter(h => h.id !== habitId));
      if (selectedHabit?.id === habitId) {
        setSelectedHabit(null);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <header className="app-header">
          <h1 className="app-title">🔥 Habit Streak Tracker</h1>
          <p className="app-subtitle">
            Build lasting habits, one day at a time!
          </p>
        </header>

        <Statistics habits={habits} />

        <HabitForm onAddHabit={handleAddHabit} />

        {habits.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No habits yet!</h3>
            <p>Click "Add New Habit" to get started</p>
          </div>
        ) : (
          <>
            <div className="habits-grid">
              {habits.map(habit => (
                <div key={habit.id}>
                  <HabitCard
                    habit={habit}
                    onToggleToday={handleToggleToday}
                    onDelete={handleDeleteHabit}
                  />
                  <button
                    className="view-calendar-button"
                    onClick={() => setSelectedHabit(
                      selectedHabit?.id === habit.id ? null : habit
                    )}
                  >
                    {selectedHabit?.id === habit.id ? '📊 Hide Calendar' : '📅 View Calendar'}
                  </button>
                  
                  {selectedHabit?.id === habit.id && (
                    <Calendar habit={habit} />
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="motivational-box">
          <h3>💪 Keep Going!</h3>
          <p>
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
            <br />
            <em>- Aristotle</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;