import { useState } from 'react';
import { query } from '../../src/lib/db';
import CoursesForm from '../../components/newRoundForm';
// import { query } from '../../lib/db';

export async function getStaticProps(){
  const q = `SELECT name FROM Courses;`;
  const result = await query(q);

  const data = result.rows
  return {
    props: {
      data, 
    }
  }
}

const newRound = (data) => {
  return (
    <div>
      <div>
        <h1>Veldu völl</h1>
        <select>
          {data.data.map((course) => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
        <CoursesForm></CoursesForm>
      </div>
    </div>
  )
} 
export default newRound;
// export default function GolfRoundForm() {
//   const [scores, setScores] = useState(Array(18).fill(''));
//   const [selectedCourse, setSelectedCourse] = useState('');
  
//   const handleScoreChange = (event, holeNumber) => {
//     const newScores = [...scores];
//     newScores[holeNumber] = event.target.value;
//     setScores(newScores);
//   };

//   const handleCourseChange = (event) => {
//     setSelectedCourse(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const props = await getStaticProps();
//     console.log(props);
//     console.log(scores);
//   };

//   // const courseOptions = [];
//   // for (let i = 0; i < courses.length; i++) {
//   //   const course = courses[i];
//   //   courseOptions.push(
//   //     <option key={course} value={course}>{course}</option>
//   //   );
//   // }

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* <h2>Veldu völl</h2>
//       <label htmlFor="course-select">Veldu völl:</label>
//       <select id="course-select" value={selectedCourse} onChange={handleCourseChange}>
//         <option value="">-- Veldu völl --</option>
//         {courseOptions}
//       </select> */}
//       {scores.map((score, index) => (
//         <div key={index}>
//           <label htmlFor={`hole-${index + 1}`}>{`Hole ${index + 1}: `}</label>
//           <input 
//             id={`hole-${index + 1}`}
//             type="number"
//             min={1}
//             max={10}
//             value={score}
//             onChange={(event) => handleScoreChange(event, index)}
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
