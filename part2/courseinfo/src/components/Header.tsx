import React from "react";
import { HeaderProps } from "../interfaces/GeneralInterfaces";

// define component
const Header:React.FC<HeaderProps> = ({title}) => {
  // return the component data
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default Header;