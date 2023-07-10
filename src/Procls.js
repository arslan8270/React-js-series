import React from "react";

class Procls extends React.Component{
    
    render()
    {
        console.log(this.props)
        
        return(
            <div style={{backgroundColor:'skyblue', margin:20}}>Prop using class component {this.props.name} </div>
            
        )
    }
}

export default Procls;