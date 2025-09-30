import React from "react";

// define interface
interface HeaderProps {
  title: string;
}

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