import React from 'react';
import PlaylistManager from './components/PlaylistManager';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <header className="header">
          <h1 className="title">🎵 Music Playlist Organizer</h1>
          <p className="subtitle">Drag & drop to organize • BPM analyzer</p>
        </header>

        <PlaylistManager />

        <footer className="footer">
          <p>Made with 💜 on Day 10 of 60 Days 60 Projects</p>
        </footer>
      </div>
    </div>
  );
}

export default App;