

import './App.css'

function App() {
  function handleIncrementClick() { 
  }

  function handleDecrementClick() { 
  }

  return (
    <>
      <div className='container'>
        <button className='btn btn-primary' onClick={handleIncrementClick}>
          +
        </button>
        <p>Count: </p>
        <button className='btn btn-danger' onClick={handleDecrementClick}>
          -
        </button>

      </div>
    </>
  )
}

export default App
