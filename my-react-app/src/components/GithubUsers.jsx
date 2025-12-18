import React, { useEffect, useState } from 'react'
import axios from 'axios';
        
export default function GithubUsers() {
    const[users,setUsers]=useState([]);
    const[totalUsers,setTotal]=useState(0);

     useEffect(() => {
        // Make GET request to fetch data
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
                setTotal(response.data.length);
            })
            .catch((err) => {
                 console.log(err);
                // setError(err.message);
            });
    }, []);

    /* useEffect(()=>{
        async function fetchGitHubUsers(){
            try{
                // const response= await fetch('https://api.github.com/users');
                const response= await fetch('https://jsonplaceholder.typicode.com/users');
                const data= await response.json();
                console.log(data);
                setUsers(data);
                // console.log(data.length);
                setTotal(data.length);
            }catch(error){
                console.log(error);
            }
        }
            
            fetchGitHubUsers();
        },[]); */


    return (
     
        <div>
        {/* <p key={user.id}>{user.name}</p> */}

          <h1>Total Users: {totalUsers} </h1>
          
           <table border={2}>
            <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
            </thead>
            <tbody>
            {
                users.map((user)=>{
                    return (              
                            <tr  key={user.id}>
                                <td> {user.name}</td>
                                <td> {user.username}  </td>
                                <td>{user.email}  </td>
                            </tr>  
                )
                
            })
            
        } 
        </tbody>
         </table>  


      </div> 
  )
}
