import React from "react";

function PassFunc(props)
{
    return(
        <div>
            <h1>Pass function as props</h1>
            <button onClick={()=>props.data()}>Call Data function</button>
        </div>
    )
}

export default PassFunc;