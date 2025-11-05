// ============================================
// STATISTICS COMPONENT
// Purpose: Display typing statistics
// ============================================

import React from 'react';

function Statistics({ keysPressed, charsTyped }) {
  return (
    <div className="statistics-container">
      <div className="stat-card">
        <div className="stat-number">{keysPressed}</div>
        <div className="stat-label">Keys Pressed</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-number">{charsTyped}</div>
        <div className="stat-label">Characters Typed</div>
      </div>
    </div>
  );
}

export default Statistics;