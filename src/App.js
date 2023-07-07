import { useState } from 'react';
import logo from './logo.svg';
import '.clApp.css';
import Users from './Users';
import Clscomp from './Clscomp';
import Student from './Student';


let data = "khan"
function App() {
  let [data,setData] = useState(0)
 

  function Apple()
  {
    return(<div>Apple component</div>)
  }



  function updatedata()
  {
    setData(data+1)
  }


  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updatedata}>Click Me</button>
     <Users/>
     <Clscomp/>
     <Apple/>
     <Student name={"arslanbaloch"} email={"iamarslanbaloch@gmail.com"}/>
    


    </div>
  );
}

export default App;
