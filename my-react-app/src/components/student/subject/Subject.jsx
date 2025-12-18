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

  )
}
