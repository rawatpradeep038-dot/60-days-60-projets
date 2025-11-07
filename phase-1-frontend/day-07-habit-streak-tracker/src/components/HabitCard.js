// ============================================
// HABIT CARD COMPONENT
// Display individual habit with streak
// ============================================

import React from 'react';
import { getTodayString, calculateStreak } from '../utils/dateHelpers';

function HabitCard({ habit, onToggleToday, onDelete }) {
  const today = getTodayString();
  const isCompletedToday = habit.completedDates.includes(today);
  const currentStreak = calculateStreak(habit.completedDates);
  const totalDays = habit.completedDates.length;
  
  // Calculate longest streak
  let longestStreak = 0;
  let tempStreak = 0;
  const sorted = [...habit.completedDates].sort();
  
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      tempStreak = 1;
    } else {
      const prevDate = new Date(sorted[i - 1]);
      const currDate = new Date(sorted[i]);
      const dayDiff = (currDate - prevDate) / (1000 * 60 * 60 * 24);
      
      if (dayDiff === 1) {
        tempStreak++;
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
  }
  longestStreak = Math.max(longestStreak, tempStreak);

  return (
    <div className="habit-card">
      <div className="habit-header">
        <div className="habit-title">
          <span className="habit-icon">{habit.icon}</span>
          <h3>{habit.name}</h3>
        </div>
        <button 
          className="delete-button"
          onClick={() => onDelete(habit.id)}
          title="Delete habit"
        >
          🗑️
        </button>
      </div>

      <div className="habit-stats">
        <div className="stat">
          <div className="stat-value">{currentStreak}</div>
          <div className="stat-label">Current Streak</div>
        </div>
        <div className="stat">
          <div className="stat-value">{longestStreak}</div>
          <div className="stat-label">Best Streak</div>
        </div>
        <div className="stat">
          <div className="stat-value">{totalDays}</div>
          <div className="stat-label">Total Days</div>
        </div>
      </div>

      <button
        className={`check-button ${isCompletedToday ? 'completed' : ''}`}
        onClick={() => onToggleToday(habit.id)}
      >
        {isCompletedToday ? '✅ Done Today!' : '⭕ Mark as Done'}
      </button>
    </div>
  );
}

export default HabitCard;