// ============================================
// CONTROLS COMPONENT
// Purpose: Sound controls (volume, type, toggle)
// ============================================

import React from 'react';
import { soundProfiles } from '../sounds/soundData';

function Controls({ 
  volume, 
  onVolumeChange, 
  soundType, 
  onSoundTypeChange,
  isEnabled,
  onToggle
}) {
  return (
    <div className="controls-container">
      <div className="control-group">
        <label className="control-label">
          <span className="label-icon">🔊</span>
          Volume: {Math.round(volume * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="volume-slider"
        />
      </div>
      
      <div className="control-group">
        <label className="control-label">
          <span className="label-icon">🎹</span>
          Keyboard Type
        </label>
        <select
          value={soundType}
          onChange={(e) => onSoundTypeChange(e.target.value)}
          className="sound-selector"
        >
          {Object.entries(soundProfiles).map(([key, profile]) => (
            <option key={key} value={key}>
              {profile.name}
            </option>
          ))}
        </select>
        <p className="profile-description">
          {soundProfiles[soundType].description}
        </p>
      </div>
      
      <div className="control-group">
        <button
          onClick={onToggle}
          className={`toggle-button ${isEnabled ? 'active' : 'inactive'}`}
        >
          {isEnabled ? '🔊 Sound ON' : '🔇 Sound OFF'}
        </button>
      </div>
    </div>
  );
}

export default Controls;