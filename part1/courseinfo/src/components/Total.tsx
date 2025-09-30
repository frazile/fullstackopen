import React from "react";


// define interface for all content items
interface ContentArray {
  parts: PartsItem[];
}

interface PartsItem {
  id: string,
  title: string,
  exercises: number
}


// define component
const Total:React.FC<ContentArray> = ({parts}) => {
  // calculate the math before returning value
  const total: number = parts.reduce((sum, part) => sum + part.exercises, 0);

  // return the component data
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  )
}

export default Total;