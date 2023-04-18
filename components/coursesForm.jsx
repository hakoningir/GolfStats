import React, { useState } from 'react';

const CoursesForm = ({ courses, onCourseSelect }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (event) => {
    setSelectedCourse(event.target.value);
    onCourseSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="course-select">Select a course:</label>
      <select id="course-select" value={selectedCourse} onChange={handleCourseSelect}>
        <option value="">Choose a course...</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoursesForm;
