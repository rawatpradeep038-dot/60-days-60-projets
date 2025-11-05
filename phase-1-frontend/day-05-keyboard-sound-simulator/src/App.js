// ============================================
// MAIN APP COMPONENT
// Purpose: Keyboard event detection & sound playback
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import Keyboard from './components/Keyboard';
import Controls from './components/Controls';
import Statistics from './components/Statistics';
import { playKeySound, specialKeys } from './sounds/soundData';
import './styles/App.css';

function App() {
  // State management
  const [pressedKeys, setPressedKeys] = useState([]);
  const [volume, setVolume] = useState(0.5);
  const [soundType, setSoundType] = useState('cherry-blue');
  const [isEnabled, setIsEnabled] = useState(true);
  const [keysPressed, setKeysPressed] = useState(0);
  const [charsTyped, setCharsTyped] = useState(0);

  /**
   * Handle key down event
   */
  const handleKeyDown = useCallback((e) => {
    // Prevent default for some keys (like space scrolling page)
    if (e.key === ' ' || e.key === 'Tab') {
      e.preventDefault();
    }

    const key = e.key.toLowerCase();
    
    // Avoid repeated key events (when key is held)
    if (pressedKeys.includes(key)) return;

    // Add key to pressed keys (for visual feedback)
    setPressedKeys(prev => [...prev, key]);

    // Update statistics
    setKeysPressed(prev => prev + 1);
    
    // Only count printable characters
    if (e.key.length === 1) {
      setCharsTyped(prev => prev + 1);
    }

    // Play sound if enabled
    if (isEnabled) {
      // Check if it's a special key
      const keyType = specialKeys[e.key] || 'letter';
      playKeySound(keyType, soundType, volume);
    }
  }, [pressedKeys, isEnabled, soundType, volume]);

  /**
   * Handle key up event
   */
  const handleKeyUp = useCallback((e) => {
    const key = e.key.toLowerCase();
    
    // Remove key from pressed keys
    setPressedKeys(prev => prev.filter(k => k !== key));
  }, []);

  /**
   * Add keyboard event listeners
   */
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  /**
   * Reset statistics
   */
  const handleReset = () => {
    setKeysPressed(0);
    setCharsTyped(0);
  };

  return (
    <div className="app">
      {/* Animated background shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="content">
        <header className="app-header">
          <h1 className="app-title">🎹 Keyboard Sound Simulator</h1>
          <p className="app-subtitle">
            Type anywhere to hear mechanical keyboard sounds!
          </p>
        </header>

        {/* Controls */}
        <Controls
          volume={volume}
          onVolumeChange={setVolume}
          soundType={soundType}
          onSoundTypeChange={setSoundType}
          isEnabled={isEnabled}
          onToggle={() => setIsEnabled(!isEnabled)}
        />

        {/* Visual Keyboard */}
        <Keyboard pressedKeys={pressedKeys} />

        {/* Statistics */}
        <Statistics 
          keysPressed={keysPressed} 
          charsTyped={charsTyped} 
        />

        {/* Reset Button */}
        <div className="actions">
          <button onClick={handleReset} className="reset-button">
            🔄 Reset Statistics
          </button>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <p>💡 <strong>Tip:</strong> Start typing on your keyboard to hear the sounds!</p>
          <p>🎵 Try different keyboard types to hear various sound profiles</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💜 on Day 05 of 60 Days 60 Projects</p>
      </footer>
    </div>
  );
}

export default App;