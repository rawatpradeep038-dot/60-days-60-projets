// ============================================
// MAIN APP COMPONENT
// Purpose: CSS Animation Playground
// ============================================

import React, { useState } from 'react';
import AnimationPreview from './components/AnimationPreview';
import PropertyControls from './components/PropertyControls';
import TransformControls from './components/TransformControls';
import CodeExport from './components/CodeExport';
import Presets from './components/Presets';
import './styles/App.css';

function App() {
  const [animation, setAnimation] = useState({
    duration: 1,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'alternate',
    transforms: {
      translateY: -50,
      scale: 1,
      rotate: 0,
      skewX: 0
    },
    color: '#8b5cf6',
    opacity: 1
  });

  const handleUpdateAnimation = (newAnimation) => {
    setAnimation(newAnimation);
  };

  const handleLoadPreset = (preset) => {
    setAnimation({
      duration: preset.duration,
      timingFunction: preset.timingFunction,
      iterationCount: preset.iterationCount,
      direction: preset.direction,
      transforms: { ...preset.transforms },
      color: preset.color,
      opacity: preset.opacity
    });
  };

  const handleReset = () => {
    setAnimation({
      duration: 1,
      timingFunction: 'ease-in-out',
      iterationCount: 'infinite',
      direction: 'normal',
      transforms: {
        translateY: 0,
        scale: 1,
        rotate: 0,
        skewX: 0
      },
      color: '#8b5cf6',
      opacity: 1
    });
  };

  return (
    <div className="app">
      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="content">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">🎨 CSS Animation Playground</h1>
          <p className="app-subtitle">
            Create, customize, and export CSS animations visually
          </p>
        </header>

        {/* Main Grid */}
        <div className="main-grid">
          {/* Left Column */}
          <div className="left-column">
            <AnimationPreview animation={animation} />
            <Presets onLoadPreset={handleLoadPreset} />
            
            <div className="actions">
              <button onClick={handleReset} className="reset-button">
                🔄 Reset All
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <PropertyControls 
              animation={animation}
              onUpdate={handleUpdateAnimation}
            />
            
            <TransformControls 
              animation={animation}
              onUpdate={handleUpdateAnimation}
            />
            
            <CodeExport animation={animation} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Made with 💜 on Day 06 of 60 Days 60 Projects</p>
      </footer>
    </div>
  );
}

export default App;