import { useState } from 'react';

function Profile()
{
    const[loggedin,setLoggedin] = useState(2);

  return(
    <div>
        {
            loggedin==1?<h1>Welcome user 1</h1>
            :<h1>Welcome user 2</h1>
            
        }
    </div>
  )
}

export default Profile;