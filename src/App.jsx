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

  const nextFlashcard = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };

  const { question, answer } = flashcards[currentCard];

  return (
    <div className="flashcard-container">
      <h1>Flash Cards</h1>
      <p>These are the flash cards. There is a total of {flashcards.length} flashcards.</p>
      <div className="card-wrapper" onClick={handleCardClick}>
        <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
          <div className="front">{question}</div>
          <div className="back">{answer}</div>
        </div>
      </div>
      <button onClick={nextFlashcard}>Next</button>
    </div>
  );
}

export default App;
