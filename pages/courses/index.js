import { useState } from 'react';
import { query } from '../../lib/db';
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

  // async function selectCourse(){
  //   const q = `
  //     SELECT courseId FROM Courses where name = $1;
  //   `;
  // }
  // async function getNumPar(courseId){
  //   const q = `
  //     SELECT number, par FROM Holes WHERE courseId = $1;
  //   `;
  //   await query(q);
  // }
  

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
