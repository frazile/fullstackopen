import React from "react";

interface DisplayProps {
  value: number;
}

const Display:React.FC<DisplayProps> = ({value}) => <div>{value}</div>

export default Display