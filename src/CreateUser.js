import React, { useState } from 'react'

function CreateUser() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("");
    const [address, setAddreess] = useState("");

    function makeuser() {
        console.warn("called");
        let data={name,age,address};
        console.warn("Show data ",data);
    }

    return (
        <div>
            <h3>Create New User From</h3>
            <input type="text" name="username" value={name} onChange={((e)=>{setName(e.target.value)})}></input><br /><br />
            <input type="text" name="age" value={age} onChange={(e)=>setAge(e.target.value)}></input><br /><br />
            <input type="text" name="address" value={address} onChange={(e)=>setAddreess(e.target.value)}></input><br /><br />
            <button onClick={makeuser}>Submit</button>
        </div>
    )
}

export default CreateUser;