// Random texts for typing test
export const sampleTexts = {
  easy: [
    "The quick brown fox jumps over the lazy dog near the riverbank.",
    "A journey of a thousand miles begins with a single step forward.",
    "Time flies like an arrow but fruit flies like a banana always.",
    "Practice makes perfect when you work hard every single day."
  ],
  medium: [
    "Programming is the art of telling another human what one wants the computer to do.",
    "The only way to do great work is to love what you do and never give up trying.",
    "Success is not final and failure is not fatal but the courage to continue that counts.",
    "Innovation distinguishes between a leader and a follower in modern technology world."
  ],
  hard: [
    "Polymorphism encapsulation inheritance abstraction are fundamental object-oriented programming paradigms.",
    "Asynchronous JavaScript execution necessitates comprehensive understanding of callbacks promises async await.",
    "Quantum computing leverages superposition entanglement to perform exponentially faster computations efficiently.",
    "Blockchain decentralization cryptographic hashing consensus mechanisms revolutionize distributed ledger technology fundamentally."
  ]
};

// Get random text
export const getRandomText = (difficulty = 'medium') => {
  const texts = sampleTexts[difficulty];
  return texts[Math.floor(Math.random() * texts.length)];
};