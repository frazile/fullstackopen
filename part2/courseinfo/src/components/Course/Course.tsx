import Header from "../Header"
import Content from "./Contents"
import Total from "./Total"
import { CourseProps } from "../../interfaces/CourseInterfaces"

const Course:React.FC<CourseProps> = (props) => {

  const { course } = props;

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course