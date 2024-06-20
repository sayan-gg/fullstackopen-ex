const Header = (props) => {
  return <h2>{props.course}</h2>
}

const Total = (props) => {
  return <p><b>total of {props.sumOfExercises} exercises</b></p>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({ props }) => {
  return (
    <div>
      {props.parts.map(ele =>
        <Part key={ele.id} part={ele.name} exercises={ele.exercises} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
    <div>
       <Header course={course.name} />
       <Content props={course}/>
       <Total sumOfExercises={course.parts.reduce((acc, ele) => acc + ele.exercises, 0)} />
    </div>
  )
}

export default Course