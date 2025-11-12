import React from 'react';

function Controls({ settings, onChange }) {
  return (
    <div className="controls">
      <div className="control-group">
        <label className="label">
          Primary Color
          <input
            type="color"
            value={settings.color1}
            onChange={(e) => onChange({ ...settings, color1: e.target.value })}
            className="color-input"
          />
        </label>
      </div>

      <div className="control-group">
        <label className="label">
          Secondary Color
          <input
            type="color"
            value={settings.color2}
            onChange={(e) => onChange({ ...settings, color2: e.target.value })}
            className="color-input"
          />
        </label>
      </div>

      <div className="control-group">
        <label className="label">
          Size: {settings.size}px
          <input
            type="range"
            min="2"
            max="50"
            value={settings.size}
            onChange={(e) => onChange({ ...settings, size: Number(e.target.value) })}
            className="slider"
          />
        </label>
      </div>

      <div className="control-group">
        <label className="label">
          Spacing: {settings.spacing}px
          <input
            type="range"
            min="10"
            max="200"
            value={settings.spacing}
            onChange={(e) => onChange({ ...settings, spacing: Number(e.target.value) })}
            className="slider"
          />
        </label>
      </div>
    </div>
  );
}

export default Controls;