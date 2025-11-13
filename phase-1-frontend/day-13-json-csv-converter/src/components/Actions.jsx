import React, { useState } from 'react';

function Actions({ csvData, onReset }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(csvData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `converted-${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="actions-section">
      <div className="action-buttons">
        <button onClick={handleCopy} className="action-btn copy-btn">
          {copied ? '✓ Copied!' : '📋 Copy CSV'}
        </button>
        <button onClick={handleDownload} className="action-btn download-btn">
          💾 Download CSV
        </button>
        <button onClick={onReset} className="action-btn reset-btn">
          🔄 Reset
        </button>
      </div>

      <div className="csv-preview">
        <label className="label">CSV Output:</label>
        <pre className="csv-code">{csvData}</pre>
      </div>
    </div>
  );
}

export default Actions;