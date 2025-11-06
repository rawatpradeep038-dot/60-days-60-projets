// ============================================
// ANIMATION PREVIEW COMPONENT
// Purpose: Display animated box
// ============================================

import React from 'react';

function AnimationPreview({ animation }) {
  const { duration, timingFunction, iterationCount, direction, transforms, color, opacity } = animation;

  const animationStyle = {
    animation: `customAnimation ${duration}s ${timingFunction} infinite ${direction}`,
    backgroundColor: color,
    opacity: opacity,
    '--translate-y': `${transforms.translateY}px`,
    '--scale': transforms.scale,
    '--rotate': `${transforms.rotate}deg`,
    '--skew-x': `${transforms.skewX}deg`
  };

  return (
    <div className="preview-container">
      <div className="preview-stage">
        <div 
          className="preview-box"
          style={animationStyle}
        >
          <span className="preview-emoji">✨</span>
        </div>
      </div>
      
      <style>
        {`
          @keyframes customAnimation {
            0% {
              transform: 
                translateY(0) 
                scale(1) 
                rotate(0deg) 
                skewX(0deg);
            }
            100% {
              transform: 
                translateY(var(--translate-y)) 
                scale(var(--scale)) 
                rotate(var(--rotate)) 
                skewX(var(--skew-x));
            }
          }
        `}
      </style>
    </div>
  );
}

export default AnimationPreview;