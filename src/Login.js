import Reacta,{useState} from "react";
function Login(){
    const [usr,setUser] = useState("");
    const [Password,setPassword]= useState("");
    const [userErr,setUserErr] = useState(false);
    const [passErr,setPassErr] = useState(false);

  function login(e)
    {
        e.preventDefault
    }
    function userHandler(e)
    {      
        let item= e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else{
            setUserErr(false)

        }
    }

    function passwordHandler(e)
    {       
        let item= e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={login}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler}/>{userErr?<span>User not valid</span>:""}
            <br></br>
            <br></br>
            <input type="text" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password not valid</span>:""}
            <br></br>
            <br></br>
            <button type="submit">Login</button>
            <br></br>
            <br></br>
            </form>
        </div>
    )
}

export default Login;