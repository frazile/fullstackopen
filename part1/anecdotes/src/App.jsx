import { useState } from 'react'
import anecdotes from './assets/Anecdotes'
import Button from './components/Button'
import Title from './components/Title'


function App() {
  // remember currently shown anecdote
  const [selected, setSelected] = useState(0)

  // remember votes
  const votesArray = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(() => votesArray);


  const setToSelected = newValue => {
    console.log("pick this value: ", newValue)
    console.log("Should show this anecdote: ", anecdotes[newValue])
    setSelected(newValue)
  }

  const vote = position => {
    console.log('register vote')
    // copy existing votes
    const copyVotes = [...votes ]

    console.log('update anechdote in position: ', position)

    // update votes
    copyVotes[position] += 1

    console.log('show all votes: ', copyVotes);
    // replace old votes with the new copy
    setVotes(copyVotes);
  }

  // get random number
  const getRandomInt = oldValue => {
    const max = anecdotes.length -1;
    console.log('old value', oldValue)
    const newValue = Math.floor(Math.random() * max);
    console.log('new value', newValue)

    let i = 0;
    // check if the new value is same as the previous value
    while(oldValue === newValue && i < 5) {
      getRandomInt(newValue);
      // create fallback to prevent internal loop
      i++;

      if(i == 5) {
        console.log('something went wrong')
      }
    }

    return newValue
  }

  // Get the vote with largest amount of votes
  const mostVotes = Math.max(...votes);

  // Fetch the position
  const mostVotedIndex = votes.indexOf(mostVotes);


  return (
    <div>
      <Title text="Anecdote of the day" headingLevel="h1"/>
      {anecdotes[selected]}
      <p>Votes: {votes[selected]}</p>
      <Button text="Show next anecdote" onHandleClick={() => setToSelected(getRandomInt(selected))} />
      <Button text="vote" onHandleClick={() => vote(selected)} />
      <Title text="Most popular anecdote" headingLevel="h2"/>
      {anecdotes[mostVotedIndex]}
    </div>
  )
}

export default App