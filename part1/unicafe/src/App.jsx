import { useState } from 'react'
import Title from './components/Title'
import Button from './components/Button'
import Statistics from './components/Statistics'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Title title="Give feedback" headingLevel="h1" />
      <Button text="Good" onHandleClick={() =>  setGood(good + 1)} />
      <Button text="Neutral" onHandleClick={() =>  setNeutral(neutral + 1)} />
      <Button text="Bad" onHandleClick={() =>  setBad(bad + 1)} />
      <Title title="Statistics:" headingLevel="h2" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App
