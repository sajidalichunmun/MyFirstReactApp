import React,{useEffect,useState} from 'react'

function ContactHookFunction(props) {
    const [name,setName] = useState("sajid");
    const [age,setAge] = useState(26);
    // useEffect(()=>{
    //     console.warn("hellow from hooks")
    // })
    // useEffect(()=>{
    //     console.warn("hellow from hooks")
    //     console.warn("check props",props.name);
    // },[age])

    useEffect(()=>{
        console.warn("hellow from hooks")
        console.warn("check props",props.ename);
    })

    useEffect(()=>{
        console.warn("check props 2 for update",props.ename);
    },[])

    let data="Contact Hook And State function component";
    return (

        <div>
            <h3>Function Component Hook and State example</h3>
            <h3>{data}</h3>
            {/* <h3>{name}</h3>
            <h3>{age}</h3> */}
            <h3>{props.ename}</h3>
            <button onClick={()=>{setName("Sajid Ali")}}>Update Name</button>
            <button onClick={()=>{setAge(54)}}>Update Age</button>
        </div>
    )
}

export default ContactHookFunction;