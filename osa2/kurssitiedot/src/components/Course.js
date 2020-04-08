import React from 'react'

const Course = (props) =>{

  const content = props.course.map(course =>
    <div key={course.id}>
      <h3>{course.name}</h3>
      {course.parts.map((parts,i) =>
        <p key={i}>{parts.name + parts.exercises}</p>
      )}
      <h4>Total of {course.parts.reduce((sum, parts) => 
        {return sum + parts.exercises}, 0)} exercises</h4>
    </div>
  )
  return(
    <div>
      <h2>{props.course.name}</h2>
        {content}
    </div>
  )
}

export default Course
    