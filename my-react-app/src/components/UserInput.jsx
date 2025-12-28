import React, { useState, useEffect } from "react";

export default function UserInput() {
    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");
 
    const handleChange = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        setDisplayText(text);
    }, [text]); 

    return (
        <div>
        <input type="text" value={text} onChange={handleChange} placeholder="Start typing..." />

        <p> <b>My name is: </b> {displayText}</p>
        </div>
  )

    // const [inputs, setInputs] = useState("");

    // const handleChange = (event) => {
    //     setInputs(event.target.value);
    // }

    // return (
    //     <div>
    //         <input type="text" value={inputs} onChange={handleChange} />
    //         <p>My name is {inputs}</p>
    //     </div>
    // )
 
}



