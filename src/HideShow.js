import React, { useState } from "react";
function HideShow()
{
    const[status, setStatus] = useState(true);

    return(
        <div>
            {
                status? <h1>Hello World</h1>:null
            }

            <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>

            <button onClick={()=>setStatus(!status)}>Toggle</button>





        </div>
    );
}

export default HideShow;