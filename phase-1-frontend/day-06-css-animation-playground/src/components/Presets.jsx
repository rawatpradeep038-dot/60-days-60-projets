// ============================================
// PRESETS COMPONENT
// Purpose: Load preset animations
// ============================================

import React from 'react';
import { animationPresets } from '../utils/animationPresets';

function Presets({ onLoadPreset }) {
  return (
    <div className="presets-section">
      <h3 className="section-title">🎭 Presets</h3>
      <div className="presets-grid">
        {Object.entries(animationPresets).map(([key, preset]) => (
          <button
            key={key}
            onClick={() => onLoadPreset(preset)}
            className="preset-button"
          >
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Presets;