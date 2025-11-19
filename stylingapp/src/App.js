/* //ES7 React/Redux/GraphQL/React-Native snippets   - Extension ---->   Type  'rfc'

import React from 'react'
import Student from './components/student/Student.js'

export default function App() {
  return (
    <>
        App
        <Student> My Subjects</Student>
        <hr/>

        <Student> 
            Maths
        </Student>

        <hr/>
        <Student> 
          <ol>
            <li>Science</li>
            <li>Maths</li>
            <li>Tamil</li>
          </ol>
        </Student>
        <hr/>
        <Student> My Subjects</Student>
        <hr/>
        <Student> My Subjects</Student>
    </>
  )
}
 */

import React from 'react'
import Student from './components/student/Student.js'
import Subject from './components/student/subject/Subject.js'

export default function App() {
  return (
    <div>
      <Student fname="Archchana" lname="Krish" grade="10A"> 
          <ol>
            <li>Science</li>
            <li>Maths</li>
            <li>Tamil</li>
          </ol>
      </Student>

      <Student fname="Jana" lname="Anu" grade="11A"> 
          <ol>
            <li>ICT</li>
            <li>Maths</li>
            <li>English</li>
          </ol>
      </Student>

      <Student fname="Anu" lname="Navin" grade="9A"> 
          <Subject/>
      </Student>
    </div>
  )
}
