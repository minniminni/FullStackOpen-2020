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
        <b></b>
        <button type="submit">add</button>
      </form>
    )
  }

  export default PersonForm