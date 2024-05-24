import React, { useState } from 'react';
import './App.css';
import wilde_1 from './images/wilde_1.jpg';

const App = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setShowMessage(false);
    setShowQuestion(true);
  };

  const handleAnswer = (answer) => {
    if (answer === 'Yes') {
      setShowAnswer(true);
    }
  };

  const handleNextImage = () => {
    // Increment the current index, and loop back to 0 if reaching the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    // Decrement the current index, and loop back to the last index if reaching the beginning
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const images = [wilde_1, wilde_2, wilde_3, wilde_4];

  return (
    <div className="App">
      {showMessage && (
        <div className="message">
          <p className='name'>Nicholas Kokorudz, </p> 
          <p>You make my life so eventful and filled with joy. Spending time with you is never a dull moment. I appreciate how you can always find the 80s music for the moment with your cheeky comments. You're one of the kindest and most considerate people I know. I'm thankful that your family is always being so nice to me. Thank you for being such a wonderful person and bringing joy into my life.</p>
          <p>- Chen Qian</p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {showQuestion && (
        <div className="question">
          <p>Ready for your birthday gift? 😊</p>
          <div>
            <button className="yesButton" onClick={() => handleAnswer('Yes')}>Yes</button>
            <button className="noButton">
              No
            </button>
          </div>
        </div>
      )}
      {showAnswer && (
        <div className="answer">
          <p>See you on June 2, 2024 ❤️</p>
          <div className="image-container">
            <img src={images[currentIndex]} alt={`Wilde ${currentIndex + 1}`} />
            <div className="image-buttons">
              <button onClick={handlePrevImage}>&lt;</button>
              <button onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
