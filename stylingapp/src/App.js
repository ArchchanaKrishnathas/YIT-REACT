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
import  './App.css';

export default function App() {
  return (
    <div>
      {/* <Student fname="Archchana" lname="Krish" grade="10A"> 
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
      </Student> */}

      <h1>Student Details</h1>
      <div className="container">
          <div className="card">
            <Student fname="Archchana" lname="Krish" grade="11A"> 
                <Subject name={{sub1:'Maths',sub2:'Science',sub3:'Tamil'}}/>
            </Student>
          </div>
          <div className="card">
            <Student fname="Anu" lname="Linu" grade="9A"> 
                <Subject name={{sub1:'ICT',sub2:'Science',sub3:'English'}}/>
            </Student>
          </div>
          <div className="card">
            <Student fname="Vinu" lname="Navin" grade="7B"> 
                <Subject name={{sub1:'Maths',sub2:'English',sub3:'Tamil'}}/>
            </Student>
          </div>
          <div className="card">
            <Student fname="Jana" lname="Jeni" grade="6C"> 
                <Subject name={{sub1:'Geography',sub2:'Science',sub3:'ICT'}}/>
            </Student>
          </div>
          <div className="card">
            <Student fname="Jacob" lname="Joseph" grade="10A"> 
                <Subject name={{sub1:'Maths',sub2:'English',sub3:'Science'}}/>
            </Student>
          </div>
          <div className="card">
            <Student fname="Ester" lname="Jonah" grade="10A"> 
                <Subject name={{sub1:'Maths',sub2:'English',sub3:'Science'}}/>
            </Student>
          </div>
      </div>
    </div>
  )
}
