import React,{Component} from "react";

class Clscomp  extends Component
{

    constructor()
    {
        super();
        this.state={
            data:"arslan" 
        }
    }
    apple()
    {
        alert("apple")
    }
    render()
    {
        return(
            <>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update data</button>
             </>
        )
    }

}

export default Clscomp;
