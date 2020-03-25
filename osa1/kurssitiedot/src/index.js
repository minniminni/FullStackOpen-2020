import React from 'react';
import ReactDOM from 'react-dom';

//Kurssin nimi
const Header = (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>  
    )
}

//tehtävien osat ja tehtävämäärät
const Content = (props) => {
    return(
        <div>
            <Part part= {props.parts[0].name + props.parts[0].exercises} />
            <Part part={props.parts[1].name + props.parts[1].exercises} />
            <Part part={props.parts[2].name + props.parts[2].exercises} />
        </div>
    )
}

//tehtävien yhteismäärä
const Total = (props) => {
  const t = props.parts
    return(
        <div>
          <p>Number of excercises {t[0].exercises + t[1].exercises + t[2].exercises}</p>
        </div>
    )
}

const Part = (props) => {
    return(
        <div>
            <p>{props.part}</p>
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development ',
    parts: [
      {
        name: 'Fundamentals of React ',
        exercises: 10
      },
      {
        name: 'Using props to pass data ',
        exercises: 7
      },
      {
        name: 'State of a component ',
        exercises: 14
      }
    ]
  }
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));