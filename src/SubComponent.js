function SubComponent(props)
{
    return(
        <fragment>
          <span>{props.data.name}</span>
          <span>{props.data.email}</span>
         </fragment>
    )
}

export default SubComponent;