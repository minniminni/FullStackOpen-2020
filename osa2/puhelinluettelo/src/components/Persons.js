import React from 'react'

const Persons = props =>{
    return(
      <div>
      {props.show.map((person, i) =>
        <p key={i}>{`${person.name} ${person.number} `}
        <button onClick={() => props.handleDelete(person.id)}>delete</button>
        </p>
        )
      }
    </div>
    ) 
  }

export default Persons

