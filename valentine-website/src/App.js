import React, { useState } from 'react';
import './App.css';
import wilde_1 from './images/wilde_1.jpg';
import wilde_2 from './images/wilde_2.jpg';
import wilde_3 from './images/wilde_3.jpg';
import wilde_4 from './images/wilde_4.jpg';

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
          <p>Thank you for making me happy</p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {showQuestion && (
        <div className="question">
          <p>Will you be my Valentine?</p>
          <div>
            <button onClick={() => handleAnswer('Yes')}>Yes</button>
            <button className="noButton" disabled>
              No
            </button>
          </div>
        </div>
      )}
      {showAnswer && (
        <div className="answer">
          <p>See you on Feb 14 ❤️</p>
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