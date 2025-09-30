import React from "react";
import Part from "./Part"

// define interface for all content items
interface ContentArray {
  parts: ContentItem[];
}

// define interface for one piece of content
interface ContentItem {
  id: string,
  name: string,
  exercises: number
}

// define component
const Parts:React.FC<ContentArray> = ({parts}) => {
  // return the component data
  return (
    <>
      {/* Map the array */}
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

export default Parts;