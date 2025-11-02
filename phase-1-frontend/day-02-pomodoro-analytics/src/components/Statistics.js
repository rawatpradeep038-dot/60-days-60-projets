// ============================================
// STATISTICS COMPONENT
// ============================================

import React from 'react';

function Statistics({ sessionsCompleted }) {
  const totalMinutes = sessionsCompleted * 25;
  
  return (
    <div className="statistics-container">
      <div className="statistics-box">
        <div className="statistics-item">
          <div className="statistics-number">{sessionsCompleted}</div>
          <div className="statistics-label">Sessions Today</div>
        </div>
        
        <div className="statistics-item">
          <div className="statistics-number">{totalMinutes}</div>
          <div className="statistics-label">Minutes Worked</div>
        </div>
      </div>
      
      <div className="statistics-instructions">
        <p>🎯 Work for 25 minutes</p>
        <p>☕ Break for 5 minutes</p>
        <p>🔁 Repeat and stay focused!</p>
      </div>
    </div>
  );
}

export default Statistics;