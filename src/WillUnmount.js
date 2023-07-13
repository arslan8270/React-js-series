import React from "react";
class WillUnmount extends React.Component{

   componentWillUnmount()
   {
    alert("Component will unmount")
   }
    render(){
        return(
            <>
            <h1>Student component</h1>
            </>
        )
    }
}

export default WillUnmount;