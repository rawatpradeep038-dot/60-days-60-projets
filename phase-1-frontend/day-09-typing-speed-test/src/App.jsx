import React, { useState, useEffect, useRef } from 'react';
import TextDisplay from './components/TextDisplay';
import Stats from './components/Stats';
import Results from './components/Results';
import { getRandomText } from './utils/texts';
import './styles/App.css';

function App() {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');
  const inputRef = useRef(null);

  // Initialize with random text
  useEffect(() => {
    setText(getRandomText(difficulty));
  }, [difficulty]);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0 && !isFinished) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsFinished(true);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isFinished]);

  // Calculate WPM
  const calculateWPM = () => {
    if (!startTime || userInput.length === 0) return 0;
    
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
    const wordsTyped = userInput.trim().split(' ').length;
    const wpm = Math.round(wordsTyped / timeElapsed);
    
    return wpm;
  };

  // Calculate accuracy
  const calculateAccuracy = () => {
    if (userInput.length === 0) return 100;
    
    let correct = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) correct++;
    }
    
    return Math.round((correct / userInput.length) * 100);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    
    // Start timer on first input
    if (!isActive && !isFinished) {
      setIsActive(true);
      setStartTime(Date.now());
    }
    
    // Check if test completed
    if (value.length >= text.length) {
      setIsFinished(true);
      setIsActive(false);
    }
    
    setUserInput(value);
  };

  const handleRestart = () => {
    setUserInput('');
    setStartTime(null);
    setTimeLeft(60);
    setIsActive(false);
    setIsFinished(false);
    setText(getRandomText(difficulty));
    inputRef.current?.focus();
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    handleRestart();
  };

  if (isFinished) {
    return (
      <div className="container">
        <div className="card">
          <Results 
            wpm={calculateWPM()} 
            accuracy={calculateAccuracy()} 
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <h1 className="title">⌨️ Typing Speed Test</h1>
          <p className="subtitle">Test your typing speed and accuracy</p>
        </header>

        <div className="difficulty-selector">
          {['easy', 'medium', 'hard'].map(level => (
            <button
              key={level}
              onClick={() => handleDifficultyChange(level)}
              className={`difficulty-btn ${difficulty === level ? 'active' : ''}`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        <Stats 
          wpm={calculateWPM()} 
          accuracy={calculateAccuracy()} 
          timeLeft={timeLeft}
        />

        <TextDisplay text={text} userInput={userInput} />

        <textarea
          ref={inputRef}
          value={userInput}
          onChange={handleInput}
          placeholder={isActive ? "Keep typing..." : "Click here and start typing..."}
          className="input-area"
          autoFocus
          disabled={isFinished}
        />

        <button onClick={handleRestart} className="btn-reset">
          Restart Test
        </button>
      </div>
    </div>
  );
}

export default App;