// ============================================
// TIMER COMPONENT
// ============================================

import React from 'react';

function Timer({ timeDisplay, isBreak }) {
  return (
    <div className="timer-container">
      <div className="timer-mode-label">
        {isBreak ? '☕ Break Time' : '💼 Work Time'}
      </div>
      
      <div className="timer-display">
        {timeDisplay}
      </div>
    </div>
  );
}

export default Timer;