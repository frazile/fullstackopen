import React from "react";

interface PartProps {
  name: string,
  exercises: number
}

const Part: React.FC<PartProps> = ({name, exercises}) => (
  <p>{name}: {exercises}</p>
)

export default Part