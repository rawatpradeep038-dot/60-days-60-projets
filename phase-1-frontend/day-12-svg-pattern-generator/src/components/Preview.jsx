import React from 'react';

function Preview({ svgCode }) {
  return (
    <div className="preview-container">
      <label className="label">Preview</label>
      <div 
        className="preview-box"
        dangerouslySetInnerHTML={{ __html: svgCode }}
      />
    </div>
  );
}

export default Preview;