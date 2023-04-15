import { useState } from 'react';
import styles from '../styles/form.module.css';

export default function GolfRoundForm({ onScoreSubmit }) {
  const [scores, setScores] = useState(Array(18).fill({ par: 0, score: 0 }));

  const handleInputChange = (event, index, key) => {
    const newScores = [...scores];
    newScores[index][key] = parseInt(event.target.value);
    setScores(newScores);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onScoreSubmit(scores);
  };

  return (
    <div className={styles.form}>
      <h2>Enter Golf Round Scores</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Hole</th>
              <th>Par</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="number"
                    value={score.par}
                    onChange={(event) => handleInputChange(event, index, 'par')}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={score.score}
                    onChange={(event) => handleInputChange(event, index, 'score')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Submit Scores</button>
      </form>
    </div>
  );
}
