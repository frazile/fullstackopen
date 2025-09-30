import { useState } from "react"
import Header from "./components/Header"
import Content from "./components/Contents"
import Total from "./components/Total"
import Button from "./components/Button"
import Display from "./components/Display"

const App = () => {
  const [value, setValue] = useState(10)
  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const course = 'Half Stack application development'
  const parts = [
    {
      id: crypto.randomUUID(),
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: crypto.randomUUID(),
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: crypto.randomUUID(),
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts}  />
      <Total parts={parts} />

      <Display value={value} />

      <Button onClick={() =>  setToValue(0)} text={"reset"} />
      <Button onClick={() =>  setToValue(value + 1)} text={"increment"} />
      <Button onClick={() =>  setToValue(1000)} text={"set value to 1000"} />
    </div>
  )
}

export default App