import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {

  // this is dummy data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // const [persons, setPersons] = useState([]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const isDuplicated = persons.some(person => person.name === newName);

    if (isDuplicated) {
      alert(`${newName} is already added to phonebook`);
      return ;
    }

    console.log('new name added! [newName]: ', newName);

    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={(e) => setFilter(e.target.value)} />
      <h3>Add a new contact</h3>
      <PersonForm 
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App 