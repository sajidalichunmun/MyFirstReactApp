import React,{useState} from 'react';

function Contact() {
    //JSX Jave Script Xml 
    const [val,setVal]=useState('sajid');

    let data = "contact us component";
    function test() {
        console.warn("Hellow on Click3 function");
    }
    function textboxchange(e) {
        // console.warn("Test function");
        // console.warn("Test function",e.target);
        // console.warn("Test function",e.target.value);
        setVal(e.target.value);
    }
    return (
        <div>
            <h1>Function Component example</h1>
            <h1>JSX example: {data}</h1>
            {/* problem on Click Wrong syntex default call when page is load*/}
            {/* <button onClick={console.warn("hello on click")}>Click me1</button> */}
            <button onClick={function () { console.warn("Hello on Click2") }}>Click me2</button>
            <button onClick={test}>Click me3</button>
            <button onClick={(()=>{console.warn("hello on Click4 Write function")})}>Click me4</button>
            {/* How to get value on text event onChange and onClick*/}
            <input type="text" onChange={textboxchange} value={val}></input>
            <button onClick={(()=>{alert(val)})}>Click Event</button>
        </div>
    )
}

export default Contact