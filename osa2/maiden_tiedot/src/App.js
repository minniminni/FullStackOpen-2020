import React, { useState, useEffect } from 'react'
import Countries from './Components/Countries'
import Filter from './Components/Filter'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filtered, setFiltered ] = useState('')
  
  //filter countries
  const countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(filtered.toLowerCase()))

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
      setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFiltered(event.target.value)
  }

  const handleClick = (country) => {
    setFiltered(country)
  }

  return (
    <div>
      <Filter filtered = {filtered} handleChange = {handleFilterChange}/>
      <Countries countriesToShow = {countriesToShow} handleClick = {handleClick}/>  
    </div>
  )
}

export default App