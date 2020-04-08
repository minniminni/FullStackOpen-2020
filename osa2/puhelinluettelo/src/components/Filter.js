import React from 'react'

const Filter = props => {
    return(
      <form>
       <label>filter shown with </label>
       <input value={props.showOnly}
       onChange={props.onChange}/>
   </form>
    ) 
 }

 export default Filter