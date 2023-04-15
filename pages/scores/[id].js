import { useState } from 'react';

export default function GolfRoundForm() {
  const [scores, setScores] = useState(Array(18).fill(''));
  
  const handleScoreChange = (event, holeNumber) => {
    const newScores = [...scores];
    newScores[holeNumber] = event.target.value;
    setScores(newScores);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(scores);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Scores</h2>
      {scores.map((score, index) => (
        <div key={index}>
          <label htmlFor={`hole-${index + 1}`}>{`Hole ${index + 1}: `}</label>
          <input 
            id={`hole-${index + 1}`}
            type="number"
            min={1}
            max={10}
            value={score}
            onChange={(event) => handleScoreChange(event, index)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
