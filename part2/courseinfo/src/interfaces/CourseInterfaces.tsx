/** Define all course interfaces here */

// Course
export interface CourseProps {
  course: {
    id: string;
    name: string;
    parts: CourseItem[];
  };
}

// define interface for one part of course
export interface CourseItem {
  id: string,
  name: string,
  exercises: number
}

// Define Parts
export interface PartsProps {
  parts: CourseItem[];
}