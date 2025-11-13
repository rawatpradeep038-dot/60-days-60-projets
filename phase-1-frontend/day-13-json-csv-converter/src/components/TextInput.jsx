import React, { useState } from 'react';

function TextInput({ onParse }) {
  const [jsonText, setJsonText] = useState('');

  const handleParse = () => {
    if (!jsonText.trim()) {
      alert('Please enter JSON text');
      return;
    }
    onParse(jsonText);
  };

  const sampleJSON = `[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "city": "New York"
  },
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25,
    "city": "Los Angeles"
  }
]`;

  const handleLoadSample = () => {
    setJsonText(sampleJSON);
  };

  return (
    <div className="text-input-section">
      <div className="input-header">
        <label className="label">Or paste JSON text:</label>
        <button onClick={handleLoadSample} className="sample-btn">
          Load Sample
        </button>
      </div>
      <textarea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        placeholder="Paste your JSON here..."
        className="json-textarea"
        rows={10}
      />
      <button onClick={handleParse} className="parse-btn">
        ✓ Parse JSON
      </button>
    </div>
  );
}

export default TextInput;