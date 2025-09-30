import React, { createElement } from "react";

type Hlevels = 'H1' | 'H2'

interface TitleProps {
  text: string
  headingLevel: Hlevels
}

const Title:React.FC<TitleProps> = ({text, headingLevel}) => {

  return createElement(
    headingLevel,
    null,
    text
  )
}

export default Title