
import React, { useState, useEffect } from 'react'
import './App.css';
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showOnly, setShowOnly] = useState('')
  const [message, setMessage] = useState(null)
 
  // Haetaan data palvelimelta. 
  useEffect(() => {
    personService
    .getAll()
      .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])

  //Nimilistan rajaus
 const personsToShow = (showOnly.length === 0) 
 ? persons
 : persons.filter(person => {
    return person.name.toLowerCase().includes(showOnly.toLowerCase())
  })

  //Lisää henkilö (+ ehdot onnistuneeseen lisäykseen)
  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}
    const allNumbers = persons.map(person => person.name.toLowerCase())
    const changeNumber = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    
    if(allNumbers.includes(newName.toLowerCase())){
      console.log(`Change person: ${changeNumber}`)
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`) 
      if (confirm && newNumber.length > 7) {
        personObject.name = changeNumber.name
        personService
        .update(changeNumber.id, personObject)
          .then(returnedPerson => {
            setMessage(`${personObject.name} number changed to ${personObject.number}`)
            setTimeout(() => {
              setMessage(null)
            }, 4000)
            setPersons(persons.map(person => person.id !== changeNumber.id ? person : returnedPerson))
          })
      }
    }
       personService
      .create(personObject)
        .then(returnedPerson => {
          setMessage(`Added ${personObject.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
      })
      .catch((error) => 
      // pääset käsiksi palvelimen palauttamaan virheilmoitusolioon näin
        setMessage(error.response.data.error)
      )
      setTimeout(() => {
        setMessage(null)
      }, 4000)
  }

  //Poista henkilö
  const handleDelete = (id) => {
    console.log(` Delete id: ${id}`)
    const remove = persons.find(person => person.id === id)
    const confirm = window.confirm(`Delete ${remove.name} ?`)

    if (confirm) {
      personService
      .remove(id)
        .then(response => {
          setMessage(`Deleted ${remove.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          setMessage(`Information of ${remove.name} has already been removed from server`)
          setTimeout(() => {
            setMessage(null)
          }, 4000)
        })
    }
  }

  //Synkronoi syötekenttiin tehdyt muutokset
  const handleNameChange= (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleShowChange = (event) =>{
    setShowOnly(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter showOnly={showOnly} onChange={handleShowChange}/>
      <h3>Add a new</h3>
      <PersonForm add ={addPerson} name={newName} number={newNumber} handleName={handleNameChange} handleNumber={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons show={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App


