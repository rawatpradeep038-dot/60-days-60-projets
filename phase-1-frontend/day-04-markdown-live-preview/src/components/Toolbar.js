// ============================================
// TOOLBAR COMPONENT
// Purpose: Action buttons (copy, download, theme)
// ============================================

import React, { useState } from 'react';
import { marked } from 'marked';

function Toolbar({ markdown, isDarkMode, onThemeToggle }) {
  const [copyStatus, setCopyStatus] = useState('Copy HTML');
  
  // Copy HTML to clipboard
  const handleCopyHTML = async () => {
    const html = marked(markdown);
    
    try {
      await navigator.clipboard.writeText(html);
      setCopyStatus('✅ Copied!');
      
      // Reset status after 2 seconds
      setTimeout(() => {
        setCopyStatus('Copy HTML');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopyStatus('❌ Failed');
    }
  };
  
  // Download markdown as .md file
  const handleDownload = () => {
    // Create blob from markdown text
    const blob = new Blob([markdown], { type: 'text/markdown' });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `markdown-${Date.now()}.md`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="toolbar">
      <button 
        className="toolbar-btn copy-btn" 
        onClick={handleCopyHTML}
        title="Copy HTML to clipboard"
      >
        📋 {copyStatus}
      </button>
      
      <button 
        className="toolbar-btn download-btn" 
        onClick={handleDownload}
        title="Download as .md file"
      >
        💾 Download
      </button>
      
      <button 
        className="toolbar-btn theme-btn" 
        onClick={onThemeToggle}
        title="Toggle dark/light mode"
      >
        {isDarkMode ? '☀️' : '🌙'} Theme
      </button>
    </div>
  );
}

export default Toolbar;