import React, { useState } from 'react'

const Statistic = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}
const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={props.total} />
        <Statistic text="Average" value={props.average} />
        <Statistic text="Positive" value={`${props.postivePercentage}%`} />
      </div>
    )
  }
}

const Button = (props) => {
  return <button onClick={props.updateVote}>{props.name} </button>
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const postivePercentage = (good / total) * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button updateVote={() => setGood(good + 1)} name={'Good'} />
      <Button updateVote={() => setNeutral(neutral + 1)} name={'Neutral'} />
      <Button updateVote={() => setBad(bad + 1)} name={'Bad'} />
      <Statistics
        total={total}
        average={average}
        postivePercentage={postivePercentage}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}
export default App
