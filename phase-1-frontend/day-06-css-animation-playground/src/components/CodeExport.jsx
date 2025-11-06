// ============================================
// CODE EXPORT COMPONENT
// Purpose: Generate and copy CSS code
// ============================================

import React, { useState } from 'react';

function CodeExport({ animation }) {
  const [copied, setCopied] = useState(false);

  const generateCSS = () => {
    return `/* CSS Animation Code */
.animated-element {
  animation: customAnimation ${animation.duration}s ${animation.timingFunction} ${animation.iterationCount} ${animation.direction};
  background-color: ${animation.color};
  opacity: ${animation.opacity};
}

@keyframes customAnimation {
  0% {
    transform: translateY(0) scale(1) rotate(0deg) skewX(0deg);
  }
  100% {
    transform: 
      translateY(${animation.transforms.translateY}px) 
      scale(${animation.transforms.scale}) 
      rotate(${animation.transforms.rotate}deg) 
      skewX(${animation.transforms.skewX}deg);
  }
}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-section">
      <div className="code-header">
        <h3 className="section-title">📋 CSS Code</h3>
        <button 
          onClick={copyToClipboard}
          className="copy-button"
        >
          {copied ? '✓ Copied!' : '📋 Copy Code'}
        </button>
      </div>
      
      <pre className="code-block">
        <code>{generateCSS()}</code>
      </pre>
    </div>
  );
}

export default CodeExport;