// ============================================
// IMAGE UPLOADER COMPONENT
// Purpose: Handle image upload and preview
// ============================================

import React, { useState } from 'react';
import { extractColors } from '../utils/colorExtractor';
import '../styles/App.css';

const ImageUploader = ({ onColorsExtracted }) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  /**
   * Handle file selection
   */
  const handleFileSelect = async (file) => {
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file!');
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);

    // Extract colors
    setLoading(true);
    try {
      const colors = await extractColors(file, 5);
      onColorsExtracted(colors);
    } catch (error) {
      console.error('Error extracting colors:', error);
      alert('Failed to extract colors. Please try another image.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  /**
   * Handle drag events
   */
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  /**
   * Handle drop
   */
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="uploader-container">
      <h1>🎨 Color Palette Generator</h1>
      <p className="subtitle">Extract beautiful colors from any image</p>

      <div
        className={`upload-area ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        
        {preview ? (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="image-preview" />
            {loading && (
              <div className="loading-overlay">
                <div className="spinner"></div>
                <p>Extracting colors...</p>
              </div>
            )}
          </div>
        ) : (
          <label htmlFor="file-input" className="upload-label">
            <div className="upload-icon">📸</div>
            <p className="upload-text">
              <strong>Click to upload</strong> or drag and drop
            </p>
            <p className="upload-hint">PNG, JPG, GIF up to 10MB</p>
          </label>
        )}
      </div>

      {!preview && (
        <div className="features">
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Extract dominant colors</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📋</span>
            <span>Copy hex codes instantly</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💾</span>
            <span>Download your palette</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;