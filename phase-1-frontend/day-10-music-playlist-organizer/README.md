# Day 10 - Music Playlist Organizer

## 🎯 Project Goal
Build an interactive music playlist organizer with drag-and-drop functionality and BPM analysis.

## 🚀 Live Demo
**[View Live Demo](https://day-10-music-playlist-organizer.vercel.app)**

## 🛠️ Tech Stack
- React 18
- Vite (Build tool)
- @dnd-kit/core (Drag and drop)
- @dnd-kit/sortable (Sortable lists)
- CSS3 (Minimal styling)

## ✨ Features
- ✅ Drag & drop to reorder songs
- ✅ Add new songs with BPM
- ✅ BPM color-coded categories (Slow, Medium, Fast, Very Fast)
- ✅ Delete songs
- ✅ Real-time statistics (Total songs, Avg BPM, Total duration)
- ✅ Responsive design
- ✅ Subtle gradient background
- ✅ Smooth animations

## 🧠 What I Learned

### DnD Kit Library
- **@dnd-kit/core**: Core drag and drop functionality
- **@dnd-kit/sortable**: Sortable list implementation
- **useSortable hook**: Integrate drag and drop into components
- **DndContext**: Wrapper for drag and drop areas
- **SortableContext**: Define sortable items
- **arrayMove**: Reorder array items efficiently

### Drag and Drop Concepts
- **Sensors**: Pointer and keyboard sensors for accessibility
- **Collision Detection**: closestCenter algorithm
- **Transform**: CSS transforms for smooth dragging
- **Drag handles**: Specific areas for grabbing
- **Visual feedback**: Opacity changes during drag

### BPM Analysis
- **BPM Categories**: Slow (<80), Medium (80-120), Fast (120-140), Very Fast (>140)
- **Color coding**: Visual representation of tempo
- **Average calculations**: Computing playlist metrics

### State Management
- **Complex state**: Managing array of song objects
- **Reordering**: Using arrayMove for efficient updates
- **CRUD operations**: Create, Read, Update, Delete songs

## 🎨 Design Features

### Subtle Color Palette
- **Background**: Dark (#0f1419)
- **Primary**: Purple (#8b5cf6)
- **Accent**: Green (#10b981)
- **Text**: Soft grays (#e2e8f0, #94a3b8)
- **Effects**: Subtle glows and glassmorphism

### CSS Features
- **Short & concise**: Only 200 lines!
- **Backdrop filter**: Frosted glass effect
- **Smooth transitions**: 0.3s cubic-bezier
- **Floating shapes**: Background animations
- **Responsive grid**: Auto-fit layout

## 🏃‍♂️ Run Locally
```bash
npm install
npm run dev
```

## 📁 File Structure
```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── PlaylistManager.jsx
│   ├── SongCard.jsx
│   └── AddSongForm.jsx
├── utils/
│   └── sampleData.js
└── styles/
    └── App.css
```

## 🐛 Challenges Faced

1. **Drag and Drop Setup**
   - Challenge: Understanding DnD Kit API
   - Solution: Used useSortable hook with proper context setup

2. **Maintaining Order**
   - Challenge: Preserving order after drag
   - Solution: arrayMove function from @dnd-kit/utilities

3. **BPM Calculation**
   - Challenge: Computing average BPM
   - Solution: Reduce array with sum divided by length

4. **Duration Calculation**
   - Challenge: Adding time strings (3:20 format)
   - Solution: Convert to seconds, sum, then format back

## 💡 Key Code Snippets

### Drag and Drop Setup
```javascript
const handleDragEnd = (event) => {
  const { active, over } = event;

  if (active.id !== over.id) {
    setSongs((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }
};
```

### Sortable Song Card
```javascript
const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
  isDragging
} = useSortable({ id: song.id });

const style = {
  transform: CSS.Transform.toString(transform),
  transition,
  opacity: isDragging ? 0.5 : 1
};
```

### BPM Category
```javascript
export const getBPMCategory = (bpm) => {
  if (bpm < 80) return { label: 'Slow', color: '#8b5cf6' };
  if (bpm < 120) return { label: 'Medium', color: '#10b981' };
  if (bpm < 140) return { label: 'Fast', color: '#f59e0b' };
  return { label: 'Very Fast', color: '#ef4444' };
};
```

### Duration Calculator
```javascript
const totalDuration = songs.reduce((total, song) => {
  const [min, sec] = song.duration.split(':').map(Number);
  return total + (min * 60) + sec;
}, 0);
```

## 📊 Component Breakdown

### PlaylistManager (Main)
- **Responsibility**: State management, drag-drop context
- **State**: songs array
- **Lines of Code**: ~80

### SongCard (Draggable Item)
- **Responsibility**: Individual song display with drag handle
- **Hooks**: useSortable
- **Lines of Code**: ~50

### AddSongForm (Input)
- **Responsibility**: Form for adding new songs
- **State**: formData object
- **Lines of Code**: ~60

## 🎓 Concepts Applied

### React Patterns
- Functional Components
- useState Hook
- Props & Callbacks
- Event Handling
- Controlled Forms

### DnD Kit Patterns
- DndContext Provider
- SortableContext
- useSortable Hook
- Drag Sensors
- Collision Detection

### CSS Techniques
- Backdrop Filter
- CSS Transforms
- Flexbox & Grid
- Hover States
- Animations
- Media Queries

## 🚀 Deployment

**Platform**: Vercel  
**Build Command**: `npm run build`  
**Output Directory**: `dist`

## 📈 Performance

- **Vite Build**: < 1 second
- **Bundle Size**: ~55KB (gzipped)
- **Drag Performance**: 60fps
- **Load Time**: < 500ms

## 🔮 Future Enhancements

- [ ] Play preview audio
- [ ] Import from Spotify API
- [ ] Multiple playlists
- [ ] Export to M3U/PLS
- [ ] Sort by BPM/Artist/Duration
- [ ] Search & filter
- [ ] Save to localStorage
- [ ] Playlist sharing

## 🔗 Links

- **Live Demo**: https://day-10-music-playlist-organizer.vercel.app
- **GitHub Repo**: https://github.com/rawatpradeep038-dot/60-days-60-projects
- **Day 09 Project**: ../day-09-previous-project

## ✅ Status

**Completed on:** November 10, 2025  
**Time Spent:** ~5 hours  
**Final Status:** ✅ Deployed & Documented

---

**Day 10/60** of the #60Days60Projects Challenge

**Previous**: Day 09  
**Next**: Day 11

---

## 💬 Reflection

This project taught me the power of specialized libraries like DnD Kit. Instead of building drag-and-drop from scratch with mouse events, the library provides a robust, accessible solution. The useSortable hook makes creating draggable lists incredibly simple.

Understanding the difference between drag sensors (pointer vs keyboard) was important for accessibility. The library handles all the complex state management for drag operations, letting me focus on the UI and business logic.

BPM analysis added a practical music feature. Color-coding based on tempo helps visualize the playlist's energy. Calculating statistics like average BPM and total duration made the app more useful.

The subtle design with short CSS proved that you don't need hundreds of lines of styles to create something beautiful. Backdrop filters, subtle animations, and a consistent color scheme go a long way. Sometimes less is more! 🎵✨

---

**Built with 💜 and music**