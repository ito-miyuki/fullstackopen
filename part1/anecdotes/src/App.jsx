import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(() => Math.floor(Math.random() * anecdotes.length));
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy);
  }

  const maxVotes = Math.max(...votes);
  const IndexOfMaxVotes = votes.indexOf(maxVotes);

  return (
    <>
    <h1>Anecode of Today</h1>
    <div>
      {anecdotes[selected]}
    </div>
    <div>
      has {votes[selected]} votes
    </div>
    <button onClick={handleVote}>
        vote
    </button>   
    <button onClick={handleClick}>
      next anecdote
    </button>
    <h1>Anecode with most votes</h1>
    <div>
      {anecdotes[IndexOfMaxVotes]}
    </div>
    <div>
      has {votes[IndexOfMaxVotes]} votes
    </div>
    </>
  )
}

export default App
