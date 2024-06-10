const Header = (props) => {
  return (
    <div>
      <h1>Course Name: {props.course.name}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.partName} {props.exerciseCount}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.course.parts[0].name} exerciseCount={props.course.parts[0].exercises} />
      <Part partName={props.course.parts[1].name} exerciseCount={props.course.parts[1].exercises} />
      <Part partName={props.course.parts[2].name} exerciseCount={props.course.parts[2].exercises} />
    </div>
  )
}

const Footer = (props) => {
  const total = props.course.parts.reduce((acc, ele) => {
    return acc + ele.exercises
    }, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
   ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Footer course={course} />
    </div>
  )
}

export default App