import React from "react";

interface ButtonProps {
  // `onClick` is a function that returns nothing (void)
  onClick: () => void;
  // `text` is a string
  text: string;
}

const Button:React.FC<ButtonProps> = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

export default Button;