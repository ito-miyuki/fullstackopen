import { useState } from 'react'

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
      <div>filter shown with <input value={filter} onChange={(e) => setFilter(e.target.value)}/></div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredPersons.map((person, index) => {
          return <div key={index}>{person.name}: {person.number}</div>
        })}
    </div>
  )
}

export default App 