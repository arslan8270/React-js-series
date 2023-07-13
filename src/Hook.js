import React, { useState } from "react";
function Hook()
{
    const [data,setData] = useState("arslanbaloch")

    return(
        <>
        <h1>{data}</h1>
        <button onClick={()=>setData("khanbaloch")}>Update Data</button>
        </>
    );

}
export default Hook;