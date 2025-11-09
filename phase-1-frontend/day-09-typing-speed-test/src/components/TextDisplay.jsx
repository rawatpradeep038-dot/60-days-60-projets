import React from 'react';

function TextDisplay({ text, userInput }) {
  return (
    <div className="text-display">
      {text.split('').map((char, index) => {
        let className = 'char';
        
        if (index < userInput.length) {
          className += userInput[index] === char ? ' correct' : ' incorrect';
        }
        if (index === userInput.length) {
          className += ' current';
        }
        
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default TextDisplay;