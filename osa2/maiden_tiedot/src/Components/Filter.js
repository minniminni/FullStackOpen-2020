import React from 'react'

const Filter = (props) => {
  return (
    <form>
        <label>find countries </label>
        <input
          value={props.filtered}
          onChange={props.handleChange}  
        />
      </form>
  )
}

export default Filter