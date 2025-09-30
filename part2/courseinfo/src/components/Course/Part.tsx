import React from "react";
import { CourseItem } from "../../interfaces/CourseInterfaces"

const Part: React.FC<CourseItem> = ({name, exercises}) => (
  <p>{name}: {exercises}</p>
)

export default Part