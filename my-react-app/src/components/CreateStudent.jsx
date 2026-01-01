import React, { useState } from 'react'

export default function CreateStudent() {
    const [firstname,setFirstname]= useState("");
    const [lastname,setLastname]= useState("");

    const handleChangeValue=(e)=>{
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>Create Student</h1>
            <form action="">
                <label htmlFor="fname"> First Name </label>
                <input type="text" id="fname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)
                                                                                console.log(e.target.value); }}/>
                <br />
                <br />
                <label htmlFor="lname"> Last Name </label>
                <input type="text" name="lname" id="lname" value={lastname} onChange={(e)=>{handleChangeValue(e); }} />
            </form>
            <h1> My full name is {firstname}</h1>
        </div>
    )
}
