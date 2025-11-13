import React, { useRef } from 'react';

function FileUpload({ onFileLoad }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.json')) {
      alert('Please upload a JSON file');
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const jsonText = event.target.result;
        onFileLoad(jsonText);
      } catch (error) {
        alert('Error reading file: ' + error.message);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="upload-section">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="file-input"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="upload-btn">
        📁 Upload JSON File
      </label>
    </div>
  );
}

export default FileUpload;