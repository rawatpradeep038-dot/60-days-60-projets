// ============================================
// MAIN APP COMPONENT
// Purpose: Main application logic
// ============================================

import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ColorPalette from './components/ColorPalette';
import './styles/App.css';

function App() {
  const [colors, setColors] = useState([]);

  /**
   * Handle extracted colors from image
   */
  const handleColorsExtracted = (extractedColors) => {
    setColors(extractedColors);
  };

  /**
   * Reset to upload new image
   */
  const handleReset = () => {
    setColors([]);
  };

  return (
    <div className="app">
      {/* Animated background elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="content">
        {colors.length === 0 ? (
          <ImageUploader onColorsExtracted={handleColorsExtracted} />
        ) : (
          <ColorPalette colors={colors} onReset={handleReset} />
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💜 on Day 03 of 60 Days 60 Projects</p>
      </footer>
    </div>
  );
}

export default App;