import React, {useState} from "react"

function Getinbox(){
    const[data,setData] = useState(null);
    const[print,setPrint] = useState(false);

    function getData(val){
       
        setData(val.target.value)
    }
    return(
        <div>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData} /><br></br><br></br>
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    )
}

export default Getinbox;