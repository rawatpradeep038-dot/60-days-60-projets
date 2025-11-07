// ============================================
// STATISTICS COMPONENT
// Overall stats
// ============================================

import React from 'react';
import { calculateStreak } from '../utils/dateHelpers';

function Statistics({ habits }) {
  const totalHabits = habits.length;
  
  const completedToday = habits.filter(h => 
    h.completedDates.includes(new Date().toISOString().split('T')[0])
  ).length;
  
  const totalStreaks = habits.reduce((sum, h) => 
    sum + calculateStreak(h.completedDates), 0
  );
  
  const completionRate = totalHabits > 0 
    ? Math.round((completedToday / totalHabits) * 100)
    : 0;

  return (
    <div className="statistics-container">
      <div className="stat-card">
        <div className="stat-number">{totalHabits}</div>
        <div className="stat-label">Total Habits</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-number">{completedToday}</div>
        <div className="stat-label">Done Today</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-number">{totalStreaks}</div>
        <div className="stat-label">Active Streaks</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-number">{completionRate}%</div>
        <div className="stat-label">Today's Progress</div>
      </div>
    </div>
  );
}

export default Statistics;