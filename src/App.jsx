import { useState } from 'react';
import './App.css';

const flashcards = [
  { question: 'What is 2 + 2?', answer: '4' },
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 5 + 7?', answer: '12' },
  { question: 'What is the square root of 16?', answer: '4' }
];

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [guess, setGuess] = useState("");
  
  const prevFlashcard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };
  
  const nextFlashcard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };
  
  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };
  
  const { question, answer } = flashcards[currentCard];

  const handleGuessChange = (event) => {
    setGuess(event.target.value)
  }

  const submitGuess = () => {
    if (guess == answer) {
      setScore(score + 1)
      window.alert("✅ Correct!");
      return;
    }
    
    if (score > highScore) {
      setHighScore(score)
    }
    setScore(0)  
    window.alert(`❌ Incorrect. The correct answer was "${answer}".`);
  }


  return (
    <div className="flashcard-container">
      <h1>Flash Cards</h1>
      <p>These are the flash cards. There is a total of {flashcards.length} flashcards.</p>
      <p>Score: {score} - Highscore: {highScore}</p>
      <div className="card-wrapper" onClick={handleCardClick}>
        <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
          <div className="front">{question}</div>
          <div className="back">{answer}</div>
        </div>
      </div>
      <div className="flex-horizontal">
        <input 
          type="text" 
          placeholder="Answer Here" 
          value={guess}
          onChange={handleGuessChange}
        />
        <button onClick={submitGuess}>Submit Guess</button>
      </div>
      <div className="flex-horizontal">
        <button onClick={prevFlashcard}>Prev</button>
        <button onClick={nextFlashcard}>Next</button>
      </div>
    </div>
  );
}

export default App;
