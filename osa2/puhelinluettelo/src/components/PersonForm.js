import React from 'react'

const PersonForm = props => {
    return(
      <form onSubmit={props.add}>
        <label> name: </label>
        <input value={props.name}
          onChange={props.handleName}/>
  
        <label> number: </label>
        <input value={props.number} 
          onChange={props.handleNumber}/>
  
        <div><button type="submit">add</button></div>
        </form>
    )
  }

  export default PersonForm