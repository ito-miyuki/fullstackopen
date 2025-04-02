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
      <td>{props.text} {props.value}</td>
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
      <tr>
        <td>{props.textAve} {props.average / props.total}</td>
      </tr>
      <tr>
        <td>{props.textPos} {props.good / props.total * 100} %</td>
      </tr>
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
          <StatisticsLine text="good" value={good}/>
          <StatisticsLine text="neutral" value={neutral}/>
          <StatisticsLine text="bad" value={bad}/>
          <StatisticsLine text="all" value={total}/>
          <Statistics textPos="positive" textAve="average" total={total} average={average} good={good}/>
        </tbody>
      </table>
    </>
  )
}

export default App
