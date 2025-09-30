import React from "react";

interface StatisticLineProps {
  text: string;
  value: number;
}

const StatisticLine:React.FC<StatisticLineProps> = ({text, value}) => (
  <>
    <td>{text}:</td><td>{value}</td>
  </>
)

export default StatisticLine;