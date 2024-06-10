const Header = (props) => {
  return (
    <div>
      <h1>Course Name: {props.course}</h1>
    </div>
  )
}
const course = 'Half Stack Application Development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Part = (props) => {
  return (
    <div>
      <p>
        {props.partName} {props.exerciseCount}
      </p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part partName={part1} exerciseCount={exercises1} />
      <Part partName={part2} exerciseCount={exercises2} />
      <Part partName={part3} exerciseCount={exercises3} />

    </div>
  )
}

const Footer = () => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}


const App = () => {
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Footer />
    </div>
  )
}

export default App