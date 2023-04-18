import { useState, useEffect } from 'react';
import { getCourses } from '../../lib/db';

function UserPage() {
  const [rounds, setRounds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCourses().then(() => setLoading(false));
  }, []);

  const handleNewRound = async () => {
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      setRounds([...rounds, data]);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h1>GolfStats</h1>
      <button onClick={handleNewRound}>Nýr hringur</button>
      <button>Mín tölfræði</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Score</th>
              <th>Putts</th>
              <th>Fairway</th>
              <th>Green</th>
            </tr>
          </thead>
          <tbody>
            {rounds.map(round => (
              <tr key={round.id}>
                <td>{round.played}</td>
                <td>{round.score}</td>
                <td>{round.putts}</td>
                <td>{round.hitFairway}</td>
                <td>{round.hitGreen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserPage;
