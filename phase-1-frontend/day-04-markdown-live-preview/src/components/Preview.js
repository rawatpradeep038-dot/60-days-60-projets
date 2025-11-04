// ============================================
// PREVIEW COMPONENT
// Purpose: Display rendered Markdown as HTML
// ============================================

import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configure marked options
marked.setOptions({
  breaks: true,        // Convert \n to <br>
  gfm: true,          // GitHub Flavored Markdown
  headerIds: true,    // Add IDs to headings
  mangle: false,      // Don't mangle email addresses
  pedantic: false,    // Don't be too strict
});

function Preview({ markdown }) {
  // Convert markdown to HTML
  const rawHTML = marked(markdown);
  
  // Sanitize HTML to prevent XSS attacks
  const sanitizedHTML = DOMPurify.sanitize(rawHTML);
  
  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>👁️ Live Preview</h3>
      </div>
      
      <div 
        className="preview-content"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
}

export default Preview;