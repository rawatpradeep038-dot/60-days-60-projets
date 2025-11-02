// ============================================
// CONTROLS COMPONENT
// ============================================

import React from 'react';

function Controls({ isActive, onStart, onPause, onReset }) {
  return (
    <div className="controls-button-group">
      {!isActive && (
        <button 
          onClick={onStart} 
          className="controls-button controls-start-button"
        >
          ▶️ Start
        </button>
      )}
      
      {isActive && (
        <button 
          onClick={onPause} 
          className="controls-button controls-pause-button"
        >
          ⏸️ Pause
        </button>
      )}
      
      <button 
        onClick={onReset} 
        className="controls-button controls-reset-button"
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default Controls;