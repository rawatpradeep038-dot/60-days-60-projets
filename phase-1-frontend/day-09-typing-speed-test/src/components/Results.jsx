import React from 'react';

function Results({ wpm, accuracy, onRestart }) {
  const getMessage = () => {
    if (wpm >= 60) return "🔥 Amazing! Professional level!";
    if (wpm >= 40) return "👍 Great job! Keep practicing!";
    if (wpm >= 20) return "💪 Good start! You're improving!";
    return "📝 Keep practicing, you'll get better!";
  };

  return (
    <div className="results">
      <h2 className="results-title">Test Complete!</h2>
      
      <div className="results-stats">
        <div className="result-item">
          <div className="result-value">{wpm}</div>
          <div className="result-label">Words Per Minute</div>
        </div>
        
        <div className="result-item">
          <div className="result-value">{accuracy}%</div>
          <div className="result-label">Accuracy</div>
        </div>
      </div>
      
      <p className="message">{getMessage()}</p>
      
      <button onClick={onRestart} className="btn-restart">
        Try Again
      </button>
    </div>
  );
}

export default Results;