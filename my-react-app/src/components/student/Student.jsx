import React from 'react'
import './Student.css';

export default function Student(props) {
  return (

      <div className="box1">
          <h2>{props.name}'s Info</h2>
          <p><b> ID:</b> <i>{props.id}</i></p>
          <p><b> Name:</b> <i>{props.name}</i></p>
          <p><b> Age:</b> <i>{props.age}</i></p>
          <p><b> Grade:</b> <i>{props.grade}</i></p>
       </div>


        // <div className="box1">
        //   <h2>{props.fname}'s Info</h2>
        //   <p><b>First Name:</b> <i>{props.fname}</i></p>
        //   <p><b>Last Name:</b> <i>{props.lname}</i></p>
        //   <p><b>Grade:</b> <i>{props.grade}</i></p>

        //   <div className="box2">
        //     <h3>Subjects</h3>
        //     {props.children}
        //   </div>
        // </div>

  )
}




