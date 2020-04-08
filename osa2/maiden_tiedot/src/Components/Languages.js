import React from 'react'

const Languages = ({languages}) => {
  
  return languages.map(language =>
    <ul key={language.id}>
        <li>{language.name}</li>
    </ul>
    )
}

export default Languages