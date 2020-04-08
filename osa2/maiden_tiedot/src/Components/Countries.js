import React from 'react'
import Languages from './Languages'

const style = {
  margin: '5px'
}

const Countries = props => {
  const countriesToShow = props.countriesToShow

  if(countriesToShow.length === 1){
    return countriesToShow.map(country =>
      <p style={style}>
      <h1>{country.name}</h1>
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>
      <h2>Languages:</h2>
      <div><Languages languages={country.languages}/></div>
      <br></br>
     <div><img src={country.flag} width="300" height="200" alt="flag"/></div>
    </p>
  )}
  if(countriesToShow.length <= 10){
    return countriesToShow.map(country =>
      <div key={country.id}>
      {`${country.name} `} 
      <button onClick={() => props.handleClick(country.name)}>show</button>
      </div>
    )
  }
  if(countriesToShow.length > 10){
    return (
    <div>Too many matches, spesify another filter</div>
    )
  } 
}

export default Countries