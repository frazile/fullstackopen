import React from "react";
import { PartsProps } from "../../interfaces/CourseInterfaces"


// define component
const Total:React.FC<PartsProps> = ({parts}) => {
  // calculate the math before returning value
  const total: number = parts.reduce((sum, part) => sum + part.exercises, 0);

  // return the component data
  return (
    <>
      <p><b>Number of exercises: {total}</b></p>
    </>
  )
}

export default Total;