import { useState } from 'react'
import ProductList from './components/ProductList.jsx'

const pageStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '0 16px',
  fontFamily: 'system-ui, sans-serif',
}

const buttonStyle = {
  padding: '8px 16px',
  marginBottom: '16px',
  cursor: 'pointer',
}

const inputStyle = {
  padding: '6px 8px',
}

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
    <div style={pageStyle}>
      <h1>React Product Dashboard</h1>

      <button style={buttonStyle} onClick={handleToggle}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          style={inputStyle}
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  )
}

export default App
