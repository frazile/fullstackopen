import Course from "./components/Course/Course"

const App = () => {

  const courses = [
    {
      id: crypto.randomUUID(),
      name: 'Half Stack application development',
      parts: [
        {
          id: crypto.randomUUID(),
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: crypto.randomUUID(),
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: crypto.randomUUID(),
          name: 'State of a component',
          exercises: 14
        },
        {
          id: crypto.randomUUID(),
          name: 'Fourth course component',
          exercises: 2
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {
        courses.map(
          (course) => <Course key={course.id} course={course} />
        )
      }
    </>
  )

}

export default App