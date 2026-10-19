import { useState } from 'react'

function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [name, setName] = useState('')

  function handleToggle() {
    setShowProducts(!showProducts)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={handleToggle}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
        />
      </div>

      <p>Hello, {name}</p>
    </div>
  )
}

export default App
