// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
function useLocalStorage(key,initialName=''){
  console.log('redering')
  const [state, setState] = React.useState(()=>window.localStorage.getItem(key) || initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(()=> {
    console.log('useEffect')

    window.localStorage.setItem(key, state)
  },[state, key])

  return [state, setState]

}

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] =useLocalStorage('name',initialName)
  
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)
  return(

    <>
      <button onClick={()=>setCount(count+1)}></button>
      <Greeting initialName='asasa'/>
    </>
  ) 
}

export default App
