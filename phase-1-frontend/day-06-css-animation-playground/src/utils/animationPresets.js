// ============================================
// ANIMATION PRESETS
// Purpose: Pre-defined animation combinations
// ============================================

export const animationPresets = {
  bounce: {
    name: '🎾 Bounce',
    duration: 1,
    timingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
  },
  
  spin: {
    name: '🌀 Spin',
    duration: 2,
    timingFunction: 'linear',
    iterationCount: 'infinite',
    direction: 'normal',
    transforms: {
      translateY: 0,
      scale: 1,
      rotate: 360,
      skewX: 0
    },
    color: '#ec4899',
    opacity: 1
  },
  
  pulse: {
    name: '💓 Pulse',
    duration: 1.5,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'alternate',
    transforms: {
      translateY: 0,
      scale: 1.2,
      rotate: 0,
      skewX: 0
    },
    color: '#14b8a6',
    opacity: 1
  },
  
  shake: {
    name: '🔔 Shake',
    duration: 0.5,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'alternate',
    transforms: {
      translateY: 0,
      scale: 1,
      rotate: 10,
      skewX: 0
    },
    color: '#f59e0b',
    opacity: 1
  },
  
  fade: {
    name: '👻 Fade',
    duration: 2,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'alternate',
    transforms: {
      translateY: 0,
      scale: 1,
      rotate: 0,
      skewX: 0
    },
    color: '#6366f1',
    opacity: 0.3
  },
  
  slide: {
    name: '➡️ Slide',
    duration: 1.5,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'alternate',
    transforms: {
      translateY: 0,
      scale: 1,
      rotate: 0,
      skewX: 0
    },
    color: '#10b981',
    opacity: 1
  },
  
  wobble: {
    name: '🌊 Wobble',
    duration: 1,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'alternate',
    transforms: {
      translateY: 0,
      scale: 1,
      rotate: 5,
      skewX: 10
    },
    color: '#06b6d4',
    opacity: 1
  },
  
  flip: {
    name: '🔄 Flip',
    duration: 1.5,
    timingFunction: 'ease-in-out',
    iterationCount: 'infinite',
    direction: 'normal',
    transforms: {
      translateY: 0,
      scale: 1,
      rotate: 180,
      skewX: 0
    },
    color: '#a855f7',
    opacity: 1
  }
};

export const timingFunctions = [
  { value: 'linear', label: 'Linear' },
  { value: 'ease', label: 'Ease' },
  { value: 'ease-in', label: 'Ease In' },
  { value: 'ease-out', label: 'Ease Out' },
  { value: 'ease-in-out', label: 'Ease In Out' },
  { value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', label: 'Bounce' },
  { value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', label: 'Spring' }
];

export const directions = [
  { value: 'normal', label: 'Normal' },
  { value: 'reverse', label: 'Reverse' },
  { value: 'alternate', label: 'Alternate' },
  { value: 'alternate-reverse', label: 'Alternate Reverse' }
];