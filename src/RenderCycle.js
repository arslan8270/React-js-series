import React,{Component} from "react";

class RenderCycle  extends Component
{

    constructor()
    {
        super();
        this.state={
            name:"arslan"
        }
        console.log("cnstrctr")
       
    }
   
   
    render()
    {
        console.log("render")
        console.log("render method",this.state.email)
        
        return(
            <>
                    <h1>Render component</h1>
                    <button onClick={()=>this.setState({email:"khan@gmail.com"})}>change email</button>

                    <h1>ComponentDidMount{this.state.name}</h1>
                    <button onClick={()=>{this.setState({name:"khanbaloch"})}}>DidMount</button>
            </>
        )
    }

}

export default RenderCycle;
