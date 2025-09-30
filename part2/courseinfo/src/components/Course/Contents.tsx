import React from "react";
import Part from "./Part"
import { PartsProps } from "../../interfaces/CourseInterfaces"

// define component
const Parts:React.FC<PartsProps> = ({parts}) => {
  console.log('part: ',parts)
  // return the component data
  return (
    <>
      {/* Map the array */}
      {parts.map(part => (
        <Part key={part.id} id={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

export default Parts;