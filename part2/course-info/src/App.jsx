/* eslint-disable react/prop-types */

// import { useState } from "react";

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }



// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
//   )
// }



// // const Button = (props) => {
// //   return (
// //     <button onClick={props.onClick}>
// //         {props.text}
// //     </button>
// //   )
// // }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

  // const [counter, setCounter] = useState(0);

  // const increaseByOne = () => setCounter(counter + 1);
  // const decreaseByOne = () => setCounter(counter - 1);
  // const setToZero = () => setCounter(0);

  // const [clicks, setClicks] = useState({left: 0, right: 0});
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks, // copy the clicks and rewrite only left
  //     // right: clicks.right,
  //     left: clicks.left + 1,
  //   }
  //   setClicks(newClicks)
  // }

  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     // left: clicks.left,
  //     right: clicks.right + 1
  //   }
  //   setClicks(newClicks)
  // }

  // const handleReset = () => {
  //   setClicks({left: 0, right: 0});
  // }

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAll] = useState([])

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   setLeft(left + 1)
  // }

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   setRight(right + 1)
  // }

  // const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content parts={course.parts} />
  //     <Total parts={course.parts} />
  //     <Display counter={counter}/>
  //     <Button
  //       onClick={increaseByOne}
  //       text="Plus"
  //     />
  //     <Button
  //       onClick={decreaseByOne}
  //       text="Minus"
  //     />
  //     <Button
  //       onClick={setToZero}
  //       text="Zero"
  //     />
  //     <div>
  //       {left}
  //       <button onClick={handleLeftClick}>left</button>
  //       <button onClick={handleRightClick}>right</button>
  //       {right}
  //       <History allClicks={allClicks}/>
  //     <p>{allClicks.join(' ')}</p>
  //     </div>
  //   </div>
  // )

const Part = (props) => {
  return (
    <p>{props.parts.name} {props.parts.exercises}</p>
  )
}

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>  
  )
}

const Content = ({parts}) => {
  return (
    <>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />
  )
}
  

export default App