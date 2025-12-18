import {data} from '../../data/Dataset'
import React, { useState } from 'react'
import Student from '../student/Student';

export default function Students() {
    const[students,setStudents]= useState(data);
    const[totalStudents,setTotal]=useState(data.length);
    
    const handlerDeleteAll =() => {
        setStudents([]);
        setTotal(0);
    }

    const handlerReset =() =>{
        setStudents(data);
        setTotal(data.length);
    }

    const handlerDelete = (id) =>{
        const filterStudent= students.filter((student)=>{
              return (student.id!==id);
        });

        setStudents(filterStudent);
        setTotal(filterStudent.length);
    }

    return (
      <div> 
          <h1>Student Details</h1>
          
                {
                    students.map((student)=>{
                      return (
                        <div className="container">
                          <div className="card">
                                <Student id={student.id} name={student.name} age={student.age} grade={student.grade}/>
                              </div>
                          </div>
                      )
                    })
                } 
                



          {/* {students.map((student)=>{
            return <p>{student.name}</p> */}
       {/* 
              <h1>Student Details List: {totalStudents}</h1>
               <table border={2}>
                  <tr>
                    <th>ID</th> 
                    <th>Name</th> 
                    <th>Age</th> 
                    <th>Grade</th> 
                  </tr>
              
                  {
                    students.map((student)=>{
                        return (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.grade}</td>

                            <button onClick={()=>{
                              handlerDelete(student.id)
                            }}>Delete</button>
                          </tr>
                        )
                    })
                  }
                </table>

                 <br />

                 <button onClick={handlerDeleteAll}>Delete All</button>  <br/>  <br/>
                 <button onClick={handlerReset}>Reset</button>

                   */}





      </div>
    )
}
