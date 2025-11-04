// ============================================
// EDITOR COMPONENT
// Purpose: Markdown input textarea
// ============================================

import React from 'react';

function Editor({ markdown, onMarkdownChange }) {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <h3>📝 Markdown Editor</h3>
      </div>
      
      <textarea
        className="markdown-textarea"
        value={markdown}
        onChange={(e) => onMarkdownChange(e.target.value)}
        placeholder="Type your markdown here..."
        spellCheck="false"
      />
    </div>
  );
}

export default Editor;