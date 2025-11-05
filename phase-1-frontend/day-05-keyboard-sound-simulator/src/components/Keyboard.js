// ============================================
// KEYBOARD COMPONENT
// Purpose: Visual representation of keyboard
// ============================================

import React, { useState, useEffect } from 'react';

function Keyboard({ pressedKeys }) {
  // Common keyboard layout
  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];
  
  return (
    <div className="keyboard-container">
      <div className="keyboard-display">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <div
                key={key}
                className={`keyboard-key ${
                  pressedKeys.includes(key.toLowerCase()) ? 'pressed' : ''
                }`}
              >
                {key}
              </div>
            ))}
          </div>
        ))}
        
        {/* Spacebar */}
        <div className="keyboard-row spacebar-row">
          <div
            className={`keyboard-key spacebar ${
              pressedKeys.includes(' ') ? 'pressed' : ''
            }`}
          >
            SPACE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;