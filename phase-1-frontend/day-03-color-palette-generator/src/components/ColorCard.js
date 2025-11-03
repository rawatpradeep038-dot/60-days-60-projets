// ============================================
// COLOR CARD COMPONENT
// Purpose: Display individual color with hex code
// ============================================

import React, { useState } from 'react';
import '../styles/App.css';

const ColorCard = ({ color }) => {
  const [copied, setCopied] = useState(false);

  /**
   * Copy hex code to clipboard
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  /**
   * Determine if text should be white or black based on background
   */
  const getTextColor = () => {
    // Calculate brightness
    const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };

  return (
    <div 
      className="color-card"
      style={{ backgroundColor: color.hex }}
      onClick={copyToClipboard}
    >
      <div className="color-info" style={{ color: getTextColor() }}>
        <p className="hex-code">{color.hex}</p>
        <p className="rgb-code">{color.rgb}</p>
        <span className="copy-hint">
          {copied ? '✓ Copied!' : 'Click to copy'}
        </span>
      </div>
    </div>
  );
};

export default ColorCard;