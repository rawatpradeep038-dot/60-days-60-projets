// ============================================
// MAIN APP COMPONENT
// ============================================

import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import Statistics from './components/Statistics';
import { formatTime } from './utils/timeFormatter';
import './styles/App.css';  // Import ALL styles

function App() {
  // State
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  // Timer countdown logic
  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } 
    else if (timeLeft === 0) {
      setIsActive(false);
      
      if (!isBreak) {
        setSessionsCompleted(prev => prev + 1);
        setIsBreak(true);
        setTimeLeft(300);
      } else {
        setIsBreak(false);
        setTimeLeft(1500);
      }
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak]);

  // Handlers
  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(1500);
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">🍅 Pomodoro Timer</h1>
        
        <Timer 
          timeDisplay={formatTime(timeLeft)} 
          isBreak={isBreak}
        />
        
        <Controls
          isActive={isActive}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
        />
        
        <Statistics 
          sessionsCompleted={sessionsCompleted}
        />
      </div>
    </div>
  );
}

export default App;