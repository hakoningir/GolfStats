// import React, { useState } from 'react';

// const CoursesForm = ({ courses, onCourseSelect }) => {
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleCourseSelect = (event) => {
//     setSelectedCourse(event.target.value);
//     onCourseSelect(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="course-select">Select a course:</label>
//       <select id="course-select" value={selectedCourse} onChange={handleCourseSelect}>
//         <option value="">Choose a course...</option>
//         {courses.map((course) => (
//           <option key={course.id} value={course.id}>
//             {course.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

import { useState } from 'react';

export default function GolfRoundForm() {
  const [scores, setScores] = useState(Array(18).fill(''));
  
  const handleScoreChange = (event, holeNumber) => {
    const newScores = [...scores];
    newScores[holeNumber] = event.target.value;
    setScores(newScores);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(scores);
  };

  return (
    <form onSubmit={handleSubmit}>
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
