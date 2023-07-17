import React from "react";
import {Table} from "react-bootstrap"
function ListMap()
{
    const students=[
        {name:'arslan',email:'arslan@gmail.com', number:111},
        {name:'arslan',email:'arslan@gmail.com', number:222},
        {name:'arslan',email:'arslan@gmail.com', number:333},
        {name:'arslan',email:'arslan@gmail.com', number:444}
       
    ];  
    return(

        <div>
            <Table striped >
            {
            students.map((data)=>
             <tr>
            <td>Name is:{data.name}</td>
            <td>Email:{data.email}</td>
            <td>Number is:{data.number}</td>
            </tr>
            
        

            )
        }
        </Table>
        </div>

    )
}

export default ListMap; 