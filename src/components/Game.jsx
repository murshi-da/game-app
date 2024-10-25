import React, { useState } from 'react'; // Only import React once and destructure the hooks you need

const Game = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10000) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numGuess < targetNumber) {
      setMessage('Too low!');
    } else if (numGuess > targetNumber) {
      setMessage('Too high!');
    } else {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }

    setGuess('');
  };

  const handleReset = () => {
    setTargetNumber(Math.floor(Math.random() * 10000) + 1);
    setGuess('');
    setAttempts(0);
    setMessage('');
  };

  return (
    <div className="game-container">
      <h1><b>Number Guessing Game</b></h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Enter your guess (1-100)"
          required
        />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
      {message.includes('Correct') && <button onClick={handleReset}>Play Again</button>}
    </div>
  );
};

export default Game;


