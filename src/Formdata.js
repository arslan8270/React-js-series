import React, { useState } from "react";
function Formdata()
{
    const [name,setName] = useState("");
    const [tnc,setTnc] = useState(false);
    const [interest,setInterest] = useState("");
    

    
    function getformData(e)
    {
        console.log(name,tnc,interest)
        e.preventDefault();
    }
    return(
        <div>
            <h1>Handle form n react</h1>
            <form onSubmit={getformData}>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} /><br></br>
            <select name="" id="" onChange={(e)=>setInterest(e.target.value)} >
            <option value="">Select option</option>
            <option value="">Marvel</option>
            <option value="">DC</option>
            </select><br></br>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and conditions</span>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Formdata;