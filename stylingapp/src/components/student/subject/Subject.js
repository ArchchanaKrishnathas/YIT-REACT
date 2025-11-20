import React from 'react'
import './Subject.css';

export default function Subject({name}) {
  return (

     <div>
          <ol>
            <li>{name.sub1}</li>
            <li>{name.sub2}</li>
            <li>{name.sub3}</li>
          </ol>
    </div>




    // <div>
    //       <ol>
    //         <li>Tamil</li>
    //         <li>Maths</li>
    //         <li>English</li>
    //         <li>{name.sub1}</li>
    //       </ol>
    // </div>
  )
}
