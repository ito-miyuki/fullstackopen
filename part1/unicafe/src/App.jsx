import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.suffix? '%': ''}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  }
  return (
    <>
      <StatisticsLine text="good" value={props.good}/>
      <StatisticsLine text="neutral" value={props.neutral}/>
      <StatisticsLine text="bad" value={props.bad}/>
      <StatisticsLine text="all" value={props.total}/>
      <StatisticsLine text="average" value={(props.average / props.total).toFixed(2)}/>
      <StatisticsLine text="positive" value={(props.good / props.total * 100).toFixed(2)} suffix="%"/>
      </>
  )
}

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
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
      <table>
        <tbody>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            average={average}
          />
        </tbody>
      </table>
    </>
  )
}

export default App
