import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.text} {props.count}</div>
  )
}

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button
          onClick={handleGoodClick}
          text="good"
          count={good}
        />
        <Button
          onClick={handleNeutralClick}
          text="neutral"
          count={neutral}
        />
        <Button
          onClick={handleBadClick}
          text="bad"
          count={bad}
        />
        <h2>
          statistics
        </h2>
      </div>
      <div>
        <Display text="good" count={good}/>
        <Display text="neutral" count={neutral}/>
        <Display text="bad" count={bad}/>
      </div>
    </>
  )
}

export default App
