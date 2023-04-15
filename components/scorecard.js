import styles from '../styles/scores.module.css';

export default function Scorecard({ scores }) {
  return (
    <div className={styles.scorecard}>
      <h2>Scorecard</h2>
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
              <td>{score.par}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
