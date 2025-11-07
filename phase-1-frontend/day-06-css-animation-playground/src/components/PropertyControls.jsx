// ============================================
// PROPERTY CONTROLS COMPONENT
// Purpose: Control animation properties
// ============================================

import React from 'react';
import { timingFunctions, directions } from '../utils/animationPresets';

function PropertyControls({ animation, onUpdate }) {
  const handleChange = (property, value) => {
    onUpdate({
      ...animation,
      [property]: value
    });
  };

  return (
    <div className="controls-section">
      <h3 className="section-title">⚙️ Animation Properties</h3>
      
      <div className="controls-grid">
        {/* Duration */}
        <div className="control-item">
          <label className="control-label">
            Duration: {animation.duration}s
          </label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={animation.duration}
            onChange={(e) => handleChange('duration', parseFloat(e.target.value))}
            className="slider"
          />
        </div>

        {/* Timing Function */}
        <div className="control-item">
          <label className="control-label">Timing Function</label>
          <select
            value={animation.timingFunction}
            onChange={(e) => handleChange('timingFunction', e.target.value)}
            className="select-input"
          >
            {timingFunctions.map(tf => (
              <option key={tf.value} value={tf.value}>
                {tf.label}
              </option>
            ))}
          </select>
        </div>

        {/* Direction */}
        <div className="control-item">
          <label className="control-label">Direction</label>
          <select
            value={animation.direction}
            onChange={(e) => handleChange('direction', e.target.value)}
            className="select-input"
          >
            {directions.map(dir => (
              <option key={dir.value} value={dir.value}>
                {dir.label}
              </option>
            ))}
          </select>
        </div>

        {/* Iteration Count */}
        <div className="control-item">
          <label className="control-label">Iteration</label>
          <select
            value={animation.iterationCount}
            onChange={(e) => handleChange('iterationCount', e.target.value)}
            className="select-input"
          >
            <option value="1">1 time</option>
            <option value="2">2 times</option>
            <option value="3">3 times</option>
            <option value="5">5 times</option>
            <option value="infinite">Infinite</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PropertyControls;s