import React, { useState } from 'react';

function CodeDisplay({ svgCode, onDownload }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(svgCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-container">
      <div className="code-header">
        <label className="label">SVG Code</label>
        <div className="code-actions">
          <button onClick={handleCopy} className="action-btn">
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
          <button onClick={onDownload} className="action-btn">
            💾 Download
          </button>
        </div>
      </div>
      <pre className="code-block">{svgCode}</pre>
    </div>
  );
}

export default CodeDisplay;