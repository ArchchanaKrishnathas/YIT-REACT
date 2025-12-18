import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Student from './components/student/Student.jsx'
// import Subject from './components/student/subject/Subject.jsx'
// import Counter from './components/state/Counter.jsx'
// import Color from './components/state/Color.jsx'
import Students from './components/state/Student.jsx'
import GithubUsers from './components/GithubUsers.jsx'

function App() {

  return (
//     <div>
//       <h1>Student Details</h1>
//       <div className="container">
//           <div className="card">
//             <Student fname="Archchana" lname="Krish" grade="11A"> 
//                 <Subject name={{sub1:'Maths',sub2:'Science',sub3:'Tamil'}}/>
//             </Student>
//           </div>
//           <div className="card">
//             <Student fname="Anu" lname="Linu" grade="9A"> 
//                 <Subject name={{sub1:'ICT',sub2:'Science',sub3:'English'}}/>
//             </Student>
//           </div>
//           <div className="card">
//             <Student fname="Vinu" lname="Navin" grade="7B"> 
//                 <Subject name={{sub1:'Maths',sub2:'English',sub3:'Tamil'}}/>
//             </Student>
//           </div>
//           <div className="card">
//             <Student fname="Jana" lname="Jeni" grade="6C"> 
//                 <Subject name={{sub1:'Geography',sub2:'Science',sub3:'ICT'}}/>
//             </Student>
//           </div>
//           <div className="card">
//             <Student fname="Jacob" lname="Joseph" grade="10A"> 
//                 <Subject name={{sub1:'Maths',sub2:'English',sub3:'Science'}}/>
//             </Student>
//           </div>
//           <div className="card">
//             <Student fname="Ester" lname="Jonah" grade="10A"> 
//                 <Subject name={{sub1:'Maths',sub2:'English',sub3:'Science'}}/>
//             </Student>
//           </div>
//       </div>
//     </div>

    <>
      {/* <Counter/> */}
      {/* <Color/> */}

       {/* <Students/> */}

       <GithubUsers/>
    </>
  )
}


export default App
