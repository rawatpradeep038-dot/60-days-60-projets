// ============================================
// COLOR PALETTE COMPONENT
// Purpose: Display all extracted colors
// ============================================

import React from 'react';
import ColorCard from './ColorCard';
import '../styles/App.css';

const ColorPalette = ({ colors, onReset }) => {
  /**
   * Download palette as image
   */
  const downloadPalette = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size (200px height, 200px per color width)
    canvas.width = colors.length * 200;
    canvas.height = 200;
    
    // Draw each color
    colors.forEach((color, index) => {
      ctx.fillStyle = color.hex;
      ctx.fillRect(index * 200, 0, 200, 200);
    });
    
    // Download as image
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'color-palette.png';
      link.href = url;
      link.click();
    });
  };

  return (
    <div className="palette-container">
      <div className="palette-header">
        <h2>🎨 Your Color Palette</h2>
        <div className="palette-actions">
          <button onClick={downloadPalette} className="btn-download">
            📥 Download Palette
          </button>
          <button onClick={onReset} className="btn-reset">
            🔄 Upload New Image
          </button>
        </div>
      </div>

      <div className="color-grid">
        {colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>

      <div className="palette-info">
        <p>💡 <strong>Tip:</strong> Click any color to copy its hex code!</p>
      </div>
    </div>
  );
};

export default ColorPalette;