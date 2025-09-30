import React from "react";

interface ButtonProps {
  text: string;
  onHandleClick:  React.MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonProps> = ({ text, onHandleClick }) => (
  <button onClick={onHandleClick} >{text}</button>
)

export default Button
