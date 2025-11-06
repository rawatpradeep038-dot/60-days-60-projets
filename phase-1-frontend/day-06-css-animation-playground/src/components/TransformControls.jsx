// ============================================
// TRANSFORM CONTROLS COMPONENT
// Purpose: Control transform properties
// ============================================

import React from 'react';

function TransformControls({ animation, onUpdate }) {
  const handleTransformChange = (property, value) => {
    onUpdate({
      ...animation,
      transforms: {
        ...animation.transforms,
        [property]: parseFloat(value)
      }
    });
  };

  const handleColorChange = (value) => {
    onUpdate({
      ...animation,
      color: value
    });
  };

  const handleOpacityChange = (value) => {
    onUpdate({
      ...animation,
      opacity: parseFloat(value)
    });
  };

  return (
    <div className="controls-section">
      <h3 className="section-title">🎨 Transform & Style</h3>
      
      <div className="controls-grid">
        {/* Translate Y */}
        <div className="control-item">
          <label className="control-label">
            Translate Y: {animation.transforms.translateY}px
          </label>
          <input
            type="range"
            min="-200"
            max="200"
            value={animation.transforms.translateY}
            onChange={(e) => handleTransformChange('translateY', e.target.value)}
            className="slider"
          />
        </div>

        {/* Scale */}
        <div className="control-item">
          <label className="control-label">
            Scale: {animation.transforms.scale}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={animation.transforms.scale}
            onChange={(e) => handleTransformChange('scale', e.target.value)}
            className="slider"
          />
        </div>

        {/* Rotate */}
        <div className="control-item">
          <label className="control-label">
            Rotate: {animation.transforms.rotate}°
          </label>
          <input
            type="range"
            min="0"
            max="360"
            value={animation.transforms.rotate}
            onChange={(e) => handleTransformChange('rotate', e.target.value)}
            className="slider"
          />
        </div>

        {/* Skew X */}
        <div className="control-item">
          <label className="control-label">
            Skew X: {animation.transforms.skewX}°
          </label>
          <input
            type="range"
            min="-45"
            max="45"
            value={animation.transforms.skewX}
            onChange={(e) => handleTransformChange('skewX', e.target.value)}
            className="slider"
          />
        </div>

        {/* Color */}
        <div className="control-item">
          <label className="control-label">Color</label>
          <input
            type="color"
            value={animation.color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="color-input"
          />
        </div>

        {/* Opacity */}
        <div className="control-item">
          <label className="control-label">
            Opacity: {animation.opacity}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={animation.opacity}
            onChange={(e) => handleOpacityChange(e.target.value)}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
}

export default TransformControls;