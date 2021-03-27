import React from 'react'

const Total = ({ course }) => {
  const sum = course.parts.reduce(
    (previous, next) => previous + next.exercises,
    0
  )
  return <p>Total of {sum} exercises</p>
}

export default Total
