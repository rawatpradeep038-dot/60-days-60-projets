# Day 09 - Typing Speed Test

## 🎯 Project Goal
Build a typing speed test to measure WPM, accuracy, and improve typing skills with real-time feedback.

## 🚀 Live Demo
**[View Live Demo](https://day-09-typing-speed-test.vercel.app)**

## 🛠️ Tech Stack
- React 18 (Vite)
- CSS3 (Minimal design)
- JavaScript ES6+

## ✨ Features
- ✅ Real-time WPM calculation
- ✅ Accuracy percentage tracking
- ✅ 60-second timer
- ✅ Three difficulty levels (easy, medium, hard)
- ✅ Color-coded character feedback (green=correct, red=wrong)
- ✅ Current character highlight
- ✅ Performance messages based on results
- ✅ Restart functionality
- ✅ Clean, minimal UI
- ✅ Responsive design

## 🧠 What I Learned
- Real-time input tracking and comparison
- WPM calculation algorithms
- Timer management with useEffect
- Character-by-character text comparison
- Conditional CSS class application
- useRef for DOM element access
- Performance optimization for real-time updates

## 🎨 Design Choices
- Soft gradient background (blue to purple)
- Minimal shadows and borders
- Clear color coding (green/red feedback)
- Monospace font for typing area
- Clean card layout
- Subtle animations

## 🏃‍♂️ Run Locally
\`\`\`bash
npm install
npm run dev
\`\`\`

## 📁 File Structure
\`\`\`
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── TextDisplay.jsx
│   ├── Stats.jsx
│   └── Results.jsx
├── utils/
│   └── texts.js
└── styles/
    ├── index.css
    └── App.css
\`\`\`

## 💡 Key Algorithms

### WPM Calculation
\`\`\`javascript
const timeElapsed = (Date.now() - startTime) / 1000 / 60;
const wordsTyped = userInput.trim().split(' ').length;
const wpm = Math.round(wordsTyped / timeElapsed);
\`\`\`

### Accuracy Calculation
\`\`\`javascript
let correct = 0;
for (let i = 0; i < userInput.length; i++) {
  if (userInput[i] === text[i]) correct++;
}
const accuracy = (correct / userInput.length) * 100;
\`\`\`

## 🐛 Challenges Faced
1. Character-by-character comparison performance
2. Timer synchronization with input
3. Handling edge cases (backspace, paste)
4. Real-time color updates without lag

## 🎯 Typing Speed Benchmarks
- **0-20 WPM:** Beginner
- **20-40 WPM:** Average
- **40-60 WPM:** Above Average
- **60-80 WPM:** Advanced
- **80+ WPM:** Professional

## ✅ Status
**Completed on:** November 10, 2025  
**Time Spent:** ~4 hours  
**Built with:** Vite + React  
**Day 09/60** of #60Days60Projects

## 🔜 Future Enhancements
- [ ] Leaderboard with localStorage
- [ ] Custom text input
- [ ] Keyboard heatmap
- [ ] Error analysis
- [ ] Practice mode for specific words

---

**Built with ❤️ and fast fingers ⌨️**