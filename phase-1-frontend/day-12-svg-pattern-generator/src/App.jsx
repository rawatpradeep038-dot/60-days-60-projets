import React, { useState, useEffect } from 'react';
import PatternSelector from './components/PatternSelector';
import Controls from './components/Controls';
import Preview from './components/Preview';
import CodeDisplay from './components/CodeDisplay';
import { patterns } from './utils/patterns';
import './styles/App.css';

function App() {
  const [patternType, setPatternType] = useState('dots');
  const [settings, setSettings] = useState({
    color1: '#667eea',
    color2: '#f093fb',
    size: 8,
    spacing: 40
  });
  const [svgCode, setSvgCode] = useState('');

  useEffect(() => {
    generateSVG();
  }, [patternType, settings]);

  const generateSVG = () => {
    const patternDef = patterns[patternType](
      settings.size,
      settings.spacing,
      settings.color1,
      settings.color2
    );

    const svg = `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${patternDef}
  </defs>
  <rect width="100%" height="100%" fill="url(#${patternType})" />
</svg>`;

    setSvgCode(svg);
  };

  const handleDownload = () => {
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pattern-${patternType}-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const presets = [
    { name: 'Ocean', color1: '#00d2ff', color2: '#3a7bd5' },
    { name: 'Sunset', color1: '#ff6b6b', color2: '#ffd93d' },
    { name: 'Forest', color1: '#38ef7d', color2: '#11998e' },
    { name: 'Purple', color1: '#667eea', color2: '#764ba2' }
  ];

  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <h1 className="title">🎨 SVG Pattern Generator</h1>
          <p className="subtitle">Create beautiful patterns for your designs</p>
        </header>

        <PatternSelector selected={patternType} onSelect={setPatternType} />

        <Controls settings={settings} onChange={setSettings} />

        <div className="presets">
          <label className="label">Color Presets</label>
          <div className="preset-buttons">
            {presets.map(preset => (
              <button
                key={preset.name}
                onClick={() => setSettings({
                  ...settings,
                  color1: preset.color1,
                  color2: preset.color2
                })}
                className="preset-btn"
                style={{
                  background: `linear-gradient(135deg, ${preset.color1} 0%, ${preset.color2} 100%)`
                }}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        <Preview svgCode={svgCode} />

        <CodeDisplay svgCode={svgCode} onDownload={handleDownload} />
      </div>
    </div>
  );
}

export default App;