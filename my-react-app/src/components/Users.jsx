import React, { useEffect, useState } from 'react'

function Users() {
    const [users,setUsers]= useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
            .then(res=>res.json())
            .then(data=>setUsers(data.users));
    },[]);

  return (
    <div>
        <h2>User List</h2>

        {users.map(user => (
            <div key={user.id} style={{marginBottom: "8px"}}>
                <Link to={`/users/${user.id}`}>
                    {user.firstName} {user.lastName}
                </Link>
            </div>
        ))}
    </div>
  );
}

export default Users;