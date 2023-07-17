function Child(props)
{   
   let data="ArslanBaloch";
    return(
        <>
            <h2>User Name </h2>
           <button onClick={()=>props.alert(data)}>Click me</button>
        </>
    )
}

export default Child;
