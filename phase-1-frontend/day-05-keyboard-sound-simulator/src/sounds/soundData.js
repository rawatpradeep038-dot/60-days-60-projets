// ============================================
// SOUND DATA & AUDIO GENERATION
// Purpose: Generate keyboard sounds using Web Audio API
// ============================================

// Create audio context (browser's audio system)
let audioContext = null;

// Initialize audio context
const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

/**
 * Play a beep sound with specific frequency
 * @param {number} frequency - Sound frequency in Hz
 * @param {number} duration - Sound duration in seconds
 * @param {number} volume - Volume (0 to 1)
 * @param {string} type - Waveform type ('sine', 'square', 'sawtooth', 'triangle')
 */
const playBeep = (frequency, duration, volume, type = 'sine') => {
  const ctx = getAudioContext();
  
  // Create oscillator (sound generator)
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  // Connect nodes: oscillator → gain → speakers
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  // Set sound properties
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  gainNode.gain.value = volume;
  
  // Play sound
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
};

// Sound profiles for different keyboard types
export const soundProfiles = {
  'cherry-blue': {
    name: 'Cherry MX Blue',
    description: 'Clicky and tactile - loud click sound',
    frequency: 800,
    duration: 0.05,
    type: 'square'
  },
  'cherry-brown': {
    name: 'Cherry MX Brown',
    description: 'Tactile but quiet - soft bump',
    frequency: 600,
    duration: 0.04,
    type: 'sine'
  },
  'cherry-red': {
    name: 'Cherry MX Red',
    description: 'Linear and smooth - minimal sound',
    frequency: 500,
    duration: 0.03,
    type: 'sine'
  },
  'membrane': {
    name: 'Membrane Keyboard',
    description: 'Soft mushy sound',
    frequency: 400,
    duration: 0.06,
    type: 'triangle'
  }
};

/**
 * Play keyboard sound based on key type
 * @param {string} keyType - Type of key ('letter', 'space', 'enter', 'backspace')
 * @param {string} profile - Sound profile name
 * @param {number} volume - Volume (0 to 1)
 */
export const playKeySound = (keyType, profile, volume) => {
  const soundProfile = soundProfiles[profile] || soundProfiles['cherry-blue'];
  
  let frequency = soundProfile.frequency;
  let duration = soundProfile.duration;
  
  // Different sounds for different keys
  switch (keyType) {
    case 'space':
      frequency = frequency * 0.7; // Lower pitch
      duration = duration * 1.5;   // Longer sound
      break;
    case 'enter':
      frequency = frequency * 0.8;
      duration = duration * 1.3;
      break;
    case 'backspace':
      frequency = frequency * 1.2; // Higher pitch
      duration = duration * 0.8;
      break;
    default: // Regular letter keys
      frequency = frequency + (Math.random() * 50 - 25); // Slight variation
      break;
  }
  
  playBeep(frequency, duration, volume * 0.3, soundProfile.type);
};

// Special keys that have different sounds
export const specialKeys = {
  ' ': 'space',
  'Enter': 'enter',
  'Backspace': 'backspace',
  'Delete': 'backspace',
  'Tab': 'space'
};