/* eslint-disable react/prop-types */

const Header = (props) => {
  console.log(typeof(props));
  console.log(props.course);
  return (
    <h1>{props.course.name}</h1>  
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.parts.name} {props.parts.exercise}</p>
  )
}

const App = () => {
  // const course = 'Half Stack application development'
  // const parts = [
  //   {part: 'Fundamentals of React', exercise: 10},
  //   {part: 'Using props to pass data', exercise: 2},
  //   {part: 'State of a component', exercise: 14}
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 2
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App