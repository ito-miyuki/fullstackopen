/* eslint-disable */

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}
  
const Title = ({ name }) => {
    return (
        <h2>{name}</h2>  
    )
}
  
const Content = ({ parts }) => {
    return (
        <>
        {parts.map(part =>
        <Part key={part.id} part={part}/>
        )}
        </>
    )
}
  
const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <div><strong>total of {total} exercises</strong></div>
    )
}
  
const Course = ({ course }) => {
    return (
        <>
        <Title name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </>
    )
}

export default Course