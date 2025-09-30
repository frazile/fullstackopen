import React from "react"
import StatisticLine from "./StatisticLine";

interface FeedbackProps {
  good: number;
  bad: number;
  neutral: number;
}

const Statistics:React.FC<FeedbackProps> = (props) => {
  const { good, bad, neutral } = props;
  const all = good + bad + neutral
  const weightedScore = good - bad
  const average = weightedScore / all
  const positive = good / all * 100

  // check if feedback is already given or not
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return(
    <>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={good}/>
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={neutral}/>
          </tr>
          <tr>
            <StatisticLine text="Bad" value={bad}/>
          </tr>
          <tr>
            <StatisticLine text="All" value={all}/>
          </tr>
          <tr>
            <StatisticLine text="Average" value={average}/>
          </tr>
          <tr>
            <StatisticLine text="Positive" value={positive}/>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Statistics;