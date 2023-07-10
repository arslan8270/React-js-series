import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Clscomp from './Clscomp';
import Student from './Student';
import Profunc from './Profunc';
import Procls from './Procls';
import Getinbox from './Getinbox';
import HideShow from './HideShow';


let data = "khan baloch"
function App() {
  let [data,setData] = useState(0)
  let [name ,setName] = useState('khanbaloch')
 

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
    
     <Getinbox/>
     <HideShow/>
     <Profunc name={name} />
     <button onClick={()=>{setName("iamarslan")}}>Change the name</button>
     

     <Student name={"arslanbaloch"} email={"iamarslanbaloch@gmail.com"}/>

     <Procls name={name}/>
     <button onClick={()=>{setName("hello mister")}}>Change my name</button>

    </div>
  );
}

export default App;
