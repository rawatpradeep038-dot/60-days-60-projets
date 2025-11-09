import React from 'react';

function Stats({ wpm, accuracy, timeLeft }) {
  return (
    <div className="stats">
      <div className="stat-item">
        <div className="stat-value">{wpm}</div>
        <div className="stat-label">WPM</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-value">{accuracy}%</div>
        <div className="stat-label">Accuracy</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-value">{timeLeft}s</div>
        <div className="stat-label">Time Left</div>
      </div>
    </div>
  );
}

export default Stats;