import React from "react";

// union type
type HeadingLevel = 'H1' | 'H2';

interface TitleProps {
  title: string;
  headingLevel: HeadingLevel;
}

const Title:React.FC<TitleProps> = (props) => {
  const Hlevel = props.headingLevel;

  return (
    React.createElement(
      Hlevel,
      null,
      props.title
    )
  );
}

export default Title;
