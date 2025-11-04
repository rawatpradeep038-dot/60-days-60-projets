// ============================================
// MAIN APP COMPONENT
// Purpose: Manages state and connects all components
// ============================================

import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';
import { defaultMarkdown } from './utils/defaultMarkdown';
import './styles/App.css';

function App() {
  // State management
  const [markdown, setMarkdown] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Load saved markdown or default on first render
  useEffect(() => {
    const savedMarkdown = localStorage.getItem('markdown-draft');
    if (savedMarkdown) {
      setMarkdown(savedMarkdown);
    } else {
      setMarkdown(defaultMarkdown);
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
    }
  }, []);
  
  // Save markdown to localStorage whenever it changes
  useEffect(() => {
    if (markdown) {
      localStorage.setItem('markdown-draft', markdown);
    }
  }, [markdown]);
  
  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  
  // Handle markdown changes
  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };
  
  // Toggle theme
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <header className="app-header">
        <h1>📝 Markdown Live Preview Editor</h1>
        <p>Type Markdown, see instant results!</p>
      </header>
      
      {/* Toolbar */}
      <Toolbar 
        markdown={markdown}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />
      
      {/* Main Content - Split Pane */}
      <div className="main-content">
        <Editor 
          markdown={markdown}
          onMarkdownChange={handleMarkdownChange}
        />
        
        <Preview markdown={markdown} />
      </div>
      
      {/* Footer */}
      <footer className="app-footer">
        <p>Day 04 of 60 Days 60 Projects 🚀 | Built with React & Marked</p>
      </footer>
    </div>
  );
}

export default App;