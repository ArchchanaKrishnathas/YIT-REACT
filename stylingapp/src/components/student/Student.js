/* import React from 'react'

export default function Student({children}) {
  return (
    <div>
        <h1>Student </h1>
        {children}
    </div>
  )
}
 */

/* 
import React from 'react'

export default function Student({fname,lname,grade,children}) {
  return (
    <div>
      <h1>Student Details</h1>
      <p><b>First Name:</b> <i>{fname}</i></p>
      <p><b>Last Name:</b> <i>{lname}</i></p>
      <p><b>Grade:</b> <i>{grade}</i></p>

      <div>
        <h3>Subjects</h3>
        {children}
      </div>
    </div>
  )
} */

import React from 'react'

export default function Student(props) {
  return (
    <div>
      <h1>Student Details</h1>
      <p><b>First Name:</b> <i>{props.fname}</i></p>
      <p><b>Last Name:</b> <i>{props.lname}</i></p>
      <p><b>Grade:</b> <i>{props.grade}</i></p>

      <div>
        <h3>Subjects</h3>
        {props.children}
      </div>
    </div>
  )
}