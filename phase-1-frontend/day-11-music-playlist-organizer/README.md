# Day 11 - Music Playlist Organizer

## 🎯 Project Goal
Create a beautiful music playlist organizer with drag-and-drop, search, filters, and smooth animations using glassmorphism design.

## 🚀 Live Demo
**[View Live Demo](https://day-11-music-playlist.vercel.app)**

## 🛠️ Tech Stack
- React 18 (Vite)
- @dnd-kit (Drag and Drop)
- CSS3 (Glassmorphism, Animations)
- JavaScript ES6+
- LocalStorage

## ✨ Features
- ✅ Drag-and-drop song reordering
- ✅ Add custom songs
- ✅ Search by title or artist
- ✅ Filter by genre
- ✅ Total duration calculation
- ✅ Delete songs
- ✅ LocalStorage persistence
- ✅ Beautiful animations
- ✅ Glassmorphism design
- ✅ Light, modern theme
- ✅ Responsive design

## 🧠 What I Learned
- Drag-and-drop implementation with @dnd-kit
- Glassmorphism UI design with backdrop-filter
- CSS animations (fade, slide, scale, bounce)
- Hover transitions and micro-interactions
- Search and filter algorithms
- Duration calculation from time strings
- Data persistence with localStorage

## 🎨 Design Highlights
- **Glassmorphism**: Frosted glass effect with backdrop-filter
- **Smooth Animations**: Fade-in, slide-down, scale on hover
- **Hover Effects**: Cards lift up, buttons scale, colors change
- **Light Theme**: Soft purples, blues, clean whites
- **Micro-interactions**: Delete button rotates, icons pulse

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
│   ├── SongCard.jsx
│   ├── AddSongForm.jsx
│   ├── SearchBar.jsx
│   └── GenreFilter.jsx
├── utils/
│   └── sampleSongs.js
└── styles/
    ├── index.css
    └── App.css
\`\`\`

## 💡 Key Features Explained

### Drag and Drop
Using @dnd-kit for smooth drag-and-drop:
\`\`\`javascript
const handleDragEnd = (event) => {
  const { active, over } = event;
  if (active.id !== over.id) {
    setSongs(items => arrayMove(items, oldIndex, newIndex));
  }
};
\`\`\`

### Duration Calculation
\`\`\`javascript
const total = songs.reduce((acc, song) => {
  const [min, sec] = song.duration.split(':').map(Number);
  return acc + min * 60 + sec;
}, 0);
\`\`\`

### Glassmorphism Effect
\`\`\`css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
\`\`\`

## 🐛 Challenges Faced
1. Implementing drag-and-drop with @dnd-kit
2. Creating smooth glassmorphism without performance issues
3. Coordinating multiple animations
4. Maintaining state during drag operations

## 🎨 Animation Techniques Used
- **fadeIn**: Card entrance animation
- **slideDown**: Title and form animations
- **scale**: Button hover effects
- **translateY**: Card lift on hover
- **rotate**: Delete button on hover
- **pulse**: Music icon animation
- **bounce**: Empty state icon

## ✅ Status
**Completed on:** November 11, 2025  
**Time Spent:** ~6 hours  
**Built with:** Vite + React + @dnd-kit  
**Day 11/60** of #60Days60Projects

## 🔜 Future Enhancements
- [ ] Multiple playlists
- [ ] Play/pause functionality
- [ ] Song preview with Web Audio API
- [ ] Export playlist as JSON/CSV
- [ ] Shuffle and repeat modes
- [ ] Dark mode toggle

---

**Built with ❤️ and good music 🎵**