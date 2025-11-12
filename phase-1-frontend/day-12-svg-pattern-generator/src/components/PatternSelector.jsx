import React from 'react';
import { patternTypes } from '../utils/patterns';

function PatternSelector({ selected, onSelect }) {
  return (
    <div className="pattern-selector">
      <label className="label">Pattern Type</label>
      <div className="pattern-grid">
        {patternTypes.map(pattern => (
          <button
            key={pattern.id}
            onClick={() => onSelect(pattern.id)}
            className={`pattern-btn ${selected === pattern.id ? 'active' : ''}`}
          >
            <span className="pattern-icon">{pattern.icon}</span>
            <span className="pattern-name">{pattern.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PatternSelector;