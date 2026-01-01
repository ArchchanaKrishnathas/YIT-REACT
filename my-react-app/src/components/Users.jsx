import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <div>
      <h2>User List</h2>

    <table border={2}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Profile</th>
                    <th>Age</th>
                    <th>Show</th>
                    <th>Delete</th>
                </tr>
                {users.map(user => (
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td> <img src={user.image} width="120" alt="user"/></td>
                        <td>{user.age}</td>
                        <td> <Link to={`/users/${user.id}`}>
                            {user.firstName} {user.lastName}
                        </Link></td>
                        <td><button onClick={() => {
                            handlerdelete(user.id)
                        }}>Delete</button></td>
                    </tr>
                ))}
            </table>


      {/* {users.map(user => (
        <div key={user.id} style={{ marginBottom: "8px" }}>
          <Link to={`/users/${user.id}`}>
            {user.firstName} {user.lastName}
          </Link>
        </div>
      ))} */}
    </div>
  );
}

export default Users;
