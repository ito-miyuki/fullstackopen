/* eslint-disable react/prop-types */

import { useState } from "react";

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Header = (props) => {
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

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
  )
}

const App = () => {
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

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const handleReset = () => {
    setLeft(0);
    setRight(0);

  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text="Plus"
      />
      <Button
        onClick={decreaseByOne}
        text="Minus"
      />
      <Button
        onClick={setToZero}
        text="Zero"
      />
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    </div>
  )
}

export default App