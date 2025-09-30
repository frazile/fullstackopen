import React from "react";

interface ButtonProps {
  text: string;
  onHandleClick:  React.MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonProps> = (props) => {
  return(
    <button onClick={props.onHandleClick}>{ props.text }</button>
  )
}

export default Button