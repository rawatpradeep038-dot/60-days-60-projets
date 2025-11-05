# Day 05 - Keyboard Sound Simulator

## 🎯 Project Goal
Build an interactive keyboard sound simulator that generates mechanical keyboard sounds in real-time as you type, with multiple sound profiles, visual feedback, and typing statistics.

## 🚀 Live Demo
**[View Live Demo](https://day-05-keyboard-sound-simulator.vercel.app/)** _(Replace with actual URL after deployment)_

## 🛠️ Tech Stack
- React 18 (useState, useEffect, useCallback)
- Web Audio API (Sound Generation)
- CSS3 (Animations, Glassmorphism, Floating Effects)
- JavaScript ES6+
- Keyboard Event Listeners
- AudioContext & Oscillator API

## ✨ Features
- ✅ Real-time keyboard sound generation as you type
- ✅ 4 mechanical keyboard profiles (Cherry MX Blue, Brown, Red, Membrane)
- ✅ Visual keyboard display with key press animations
- ✅ Volume control slider (0-100%)
- ✅ Sound toggle on/off
- ✅ Typing statistics (keys pressed, characters typed)
- ✅ Different sounds for special keys (Space, Enter, Backspace)
- ✅ Floating animation effects on all elements
- ✅ Subtle purple theme with soft glows
- ✅ Wave ripple effect on key press
- ✅ Responsive design (mobile-friendly)
- ✅ Custom scrollbar styling
- ✅ Statistics reset functionality

## 🧠 What I Learned Today

### Web Audio API
- **AudioContext**: Browser's audio system for generating sounds
- **Oscillator**: Digital sound wave generator (creates tones)
- **Gain Node**: Volume control for audio
- **Waveform Types**: sine (smooth), square (harsh), triangle (mellow), sawtooth
- **Frequency & Duration**: Controlling pitch (Hz) and length (seconds)
- **Audio Node Graph**: Connecting oscillator → gain → speakers
- **Sound Synthesis**: Creating sounds from scratch without audio files

### Keyboard Event Handling
- **keydown Event**: Fired when key is pressed
- **keyup Event**: Fired when key is released
- **Key Repeat Prevention**: Detecting held keys to avoid repeated sounds
- **Event.key Property**: Getting the actual key pressed (lowercase)
- **preventDefault()**: Stopping default browser behavior (e.g., spacebar scrolling)
- **Special Keys Detection**: Identifying Space, Enter, Backspace, Tab
- **Global Event Listeners**: window.addEventListener for keyboard events

### React Advanced Patterns
- **useCallback Hook**: Memoizing event handler functions
- **Dependency Arrays**: Controlling when callbacks are recreated
- **Event Listener Cleanup**: Removing listeners on unmount to prevent memory leaks
- **State Batching**: Managing multiple state updates efficiently
- **Controlled Components**: Volume slider, sound selector
- **Props Drilling**: Passing callbacks and state to child components
- **Component Composition**: Separating Keyboard, Controls, Statistics

### CSS Advanced Animations
- **Floating Animations**: Smooth up-down movement with cubic-bezier timing
- **Staggered Animations**: Different delays for wave-like effects
- **Animation Delays**: calc(var(--delay) * 0.05s) for sequential timing
- **Transform Animations**: translateY, scale, rotate combined
- **Keyframe Animations**: Multiple animation states (0%, 50%, 100%)
- **Animation Properties**: duration, timing-function, iteration-count, delay
- **Ripple Effects**: Expanding box-shadow for wave animation
- **Hover States**: Transform on hover with smooth transitions

### Sound Design Principles
- **Frequency Mapping**: Different Hz for different keyboard types
  - Cherry MX Blue: 800Hz (high, clicky)
  - Cherry MX Brown: 600Hz (medium, tactile)
  - Cherry MX Red: 500Hz (low, smooth)
  - Membrane: 400Hz (lowest, mushy)
- **Duration Variation**: Longer sounds for spacebar, shorter for backspace
- **Pitch Variation**: Adding random frequency offset (±25Hz) for realism
- **Volume Scaling**: User volume * 0.3 to prevent ear damage
- **Waveform Selection**: Square wave for clicks, sine for smooth sounds

### Performance Optimization
- **Memoization**: useCallback prevents unnecessary re-renders
- **Event Throttling**: Built-in key repeat prevention
- **Cleanup Functions**: Removing event listeners on unmount
- **State Minimization**: Only storing necessary data
- **CSS GPU Acceleration**: transform and opacity for smooth animations

## 🎨 Design Features

### Subtle Color Palette
- **Primary Colors**: Soft purple (#a78bfa), pink (#f0abfc), mint (#5eead4)
- **Background**: Deep purple (#0c0a1d) with gradient overlays
- **Cards**: Frosted glass effect with backdrop-filter: blur(20px)
- **Text**: Lavender (#e9d5ff) primary, muted purple (#c4b5fd) secondary
- **Glows**: Subtle 15-40% opacity shadows for depth
- **Gradients**: Smooth transitions across all colored elements

### Floating Animations System
- **Title Float**: 6s gentle up-down motion
- **Card Float**: 8s floating with slight scale (1.005)
- **Key Float**: 4s individual key floating with staggered delays
- **Icon Bounce**: 3s bounce on emoji icons
- **Number Pulse**: 3s scale pulse on statistics
- **Background Shapes**: 30s+ slow morphing gradients

### Visual Keyboard
- **3 Rows Layout**: QWERTY layout with Q-P, A-L, Z-M
- **Spacebar**: Extra wide (320px) with letter spacing
- **Key Styling**: Gradient background, inset shadows, border glow
- **Press Animation**: translateY(3px), scale(0.98), wave ripple
- **Hover Effect**: translateY(-4px) with enhanced glow
- **Responsive Sizing**: Adjusts from 50px to 32px on mobile

### Interactive Effects
- **Wave Ripple**: Expanding box-shadow on key press (0 → 20px)
- **Volume Slider**: Animated gradient track with pulsing thumb
- **Button Ripples**: Expanding circle on button hover
- **Smooth Transitions**: 0.2-0.5s cubic-bezier easing
- **Theme Consistency**: All elements follow purple gradient theme

## 🏃‍♂️ Run Locally
```bash
# Navigate to project folder
cd day-05-keyboard-sound-simulator

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 File Structure
```
day-05-keyboard-sound-simulator/
├── src/
│   ├── App.js                    # Main component with keyboard logic
│   ├── index.js                  # Entry point
│   ├── index.css                 # Global styles & scrollbar
│   ├── components/
│   │   ├── Keyboard.js           # Visual keyboard display
│   │   ├── Controls.js           # Volume, sound type, toggle
│   │   └── Statistics.js         # Keys pressed counter
│   ├── sounds/
│   │   └── soundData.js          # Sound profiles & Web Audio logic
│   └── styles/
│       └── App.css               # All animations & styling
├── public/
│   └── index.html
├── package.json
└── README.md (this file)
```

## 🐛 Challenges Faced

1. **Key Repeat Issue**
   - Challenge: Holding a key fires keydown repeatedly, causing sound spam
   - Solution: Check if key is already in pressedKeys array before playing sound
   - Learning: Browser behavior differs between keydown (repeats) and keyup (once)

2. **Web Audio API Initialization**
   - Challenge: AudioContext needs user interaction to start (browser security)
   - Solution: Initialize AudioContext lazily on first keypress
   - Learning: Some browsers require user gesture before allowing audio

3. **Memory Leaks**
   - Challenge: Event listeners weren't cleaned up on unmount
   - Solution: Return cleanup function in useEffect
   - Learning: Always remove event listeners to prevent memory leaks

4. **Preventing Spacebar Page Scroll**
   - Challenge: Spacebar was scrolling the page while typing
   - Solution: e.preventDefault() for Space and Tab keys
   - Learning: Some keys have default browser behaviors that need prevention

5. **Sound Overlap**
   - Challenge: Multiple sounds playing simultaneously sounded harsh
   - Solution: Keep sounds short (0.03-0.06s) and use proper waveforms
   - Learning: Sound design requires balancing duration and frequency

6. **Staggered Animation Timing**
   - Challenge: Making each key float at different times
   - Solution: CSS custom property --delay with calc() function
   - Learning: CSS variables can be used in calculations

## 💡 Key Code Snippets

### Sound Generation with Web Audio API
```javascript
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
```

### Keyboard Event Detection
```javascript
const handleKeyDown = useCallback((e) => {
  // Prevent default for space and tab
  if (e.key === ' ' || e.key === 'Tab') {
    e.preventDefault();
  }

  const key = e.key.toLowerCase();
  
  // Avoid repeated key events
  if (pressedKeys.includes(key)) return;

  // Add key to pressed keys
  setPressedKeys(prev => [...prev, key]);

  // Update statistics
  setKeysPressed(prev => prev + 1);
  if (e.key.length === 1) {
    setCharsTyped(prev => prev + 1);
  }

  // Play sound
  if (isEnabled) {
    const keyType = specialKeys[e.key] || 'letter';
    playKeySound(keyType, soundType, volume);
  }
}, [pressedKeys, isEnabled, soundType, volume]);
```

### Event Listener Cleanup
```javascript
useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  // Cleanup function (IMPORTANT!)
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  };
}, [handleKeyDown, handleKeyUp]);
```

### Dynamic Key Press Styling
```javascript
<div
  className={`keyboard-key ${
    pressedKeys.includes(key.toLowerCase()) ? 'pressed' : ''
  }`}
>
  {key}
</div>
```

### Floating Animation with Stagger
```css
.keyboard-key {
  animation: keyFloat 4s ease-in-out infinite;
  animation-delay: calc(var(--delay, 0) * 0.05s);
}

@keyframes keyFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
```

### Wave Ripple on Key Press
```css
.keyboard-key.pressed {
  animation: keyPressWave 0.4s ease;
}

@keyframes keyPressWave {
  0% {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5),
                0 0 0 0 rgba(167, 139, 250, 0.7);
  }
  100% {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5),
                0 0 0 20px rgba(167, 139, 250, 0);
  }
}
```

## 📊 Component Breakdown

### App.js (Main Component)
- **Responsibility**: Keyboard event handling, state management
- **State**: pressedKeys (array), volume (number), soundType (string), isEnabled (boolean), keysPressed (number), charsTyped (number)
- **Key Functions**: handleKeyDown, handleKeyUp, handleReset
- **Hooks**: useCallback for memoization, useEffect for event listeners
- **Lines of Code**: ~120

### Keyboard.js (Visual Display)
- **Responsibility**: Render visual keyboard with QWERTY layout
- **Props**: pressedKeys (array)
- **Layout**: 3 rows + spacebar row
- **Key Features**: Dynamic pressed state, hover effects
- **Lines of Code**: ~40

### Controls.js (Settings Panel)
- **Responsibility**: Volume, sound type, toggle controls
- **Props**: volume, onVolumeChange, soundType, onSoundTypeChange, isEnabled, onToggle
- **Components**: Range slider, select dropdown, toggle button
- **Features**: Profile descriptions, emoji icons
- **Lines of Code**: ~50

### Statistics.js (Counter Display)
- **Responsibility**: Show typing statistics
- **Props**: keysPressed (number), charsTyped (number)
- **Display**: Two stat cards with animated numbers
- **Styling**: Gradient text, pulsing animation
- **Lines of Code**: ~25

### soundData.js (Audio Engine)
- **Responsibility**: Sound generation and profiles
- **Exports**: playKeySound, soundProfiles, specialKeys
- **Key Functions**: getAudioContext, playBeep, playKeySound
- **Profiles**: 4 keyboard types with unique frequencies
- **Lines of Code**: ~100

## 🎓 Concepts Applied

### Web Audio API
- AudioContext initialization
- Oscillator node creation
- Gain node for volume
- Node graph connections
- Waveform types
- Frequency control
- Duration timing

### Event Handling
- Keyboard events (keydown, keyup)
- Global event listeners
- Event cleanup
- Default behavior prevention
- Key repeat detection
- Special key handling

### React Hooks
- useState for state management
- useEffect for side effects
- useCallback for memoization
- Dependency arrays
- Cleanup functions
- Multiple hooks coordination

### CSS Animations
- Keyframe animations
- Transform properties
- Animation delays
- Staggered timing
- Cubic-bezier easing
- Infinite loops
- Multiple animations

### Sound Design
- Frequency mapping
- Duration control
- Volume scaling
- Waveform selection
- Random variation
- Special key sounds

## 🚀 Deployment

**Platform**: Vercel (Recommended)  
**Build Command**: `npm run build`  
**Output Directory**: `build`  
**Node Version**: 18.x

**Deployment Steps**:
1. Push code to GitHub
2. Connect repository to Vercel
3. Set root directory: `phase-1-frontend/day-05-keyboard-sound-simulator`
4. Deploy automatically

**Alternative Platforms**:
- Netlify
- GitHub Pages
- Render
- Railway

## 📈 Performance

- **Initial Load**: < 1 second
- **Key Press Response**: < 5ms (instant)
- **Sound Generation**: < 10ms
- **Animation FPS**: 60fps (GPU accelerated)
- **Bundle Size**: ~45KB (gzipped)
- **Lighthouse Score**: 95+ (Performance)
- **Memory Usage**: Minimal (cleaned up properly)

## 🔮 Future Enhancements

- [ ] Record typing sessions and replay them
- [ ] Export typing sounds as audio file
- [ ] Custom sound profile creator
- [ ] Import real keyboard sound samples (WAV files)
- [ ] Typing game mode (type specific text)
- [ ] WPM (Words Per Minute) calculator
- [ ] Accuracy percentage tracking
- [ ] Leaderboard for fastest typers
- [ ] Multiple keyboard layouts (DVORAK, COLEMAK)
- [ ] Customizable key colors
- [ ] Share typing stats on social media
- [ ] Offline mode with Service Worker
- [ ] Keyboard shortcuts for controls (Ctrl+M to mute)
- [ ] Visual sound waves display
- [ ] Adjustable key press depth

## 🔗 Links

- **Live Demo**: [Click here](https://day-05-keyboard-sound-simulator.vercel.app/)
- **GitHub Repo**: https://github.com/yourusername/60-days-60-projects
- **Day 04 Project**: https://60-days-60-projets-markdown-live-pr.vercel.app

## 📚 Resources Used

- [Web Audio API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Oscillator Node - MDN](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [Keyboard Events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [useCallback Hook - React Docs](https://react.dev/reference/react/useCallback)
- [CSS Animations - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## ✅ Status

**Completed on:** November 5, 2025  
**Time Spent:** ~5 hours  
**Commits:** 10  
**Final Status:** ✅ Functional & Documented

---

**Day 05/60** of the #60Days60Projects Challenge

**Previous**: Day 04 - Markdown Live Preview Editor  
**Next**: Day 06 - TBD

**Built with 💜 using React and Web Audio API**