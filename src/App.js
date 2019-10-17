import React, { useState } from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'

function App () {
  const [data, setData] = useState(null)
  const [active, setActive] = useState(false)

  const loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }

  if (data === null) {
    return <button onClick={loadData}>Load</button>
  }

  return (
    <div className="App row">
      <header className='col-xs-12'>
        Perfomance Test
      </header>
      <div className='col-xs-12 row content'>
        <button
          onClick={() => setActive(!active)}
          style={active ? { background: '#09d3ac' } : { background: '#fff' }}
        >
          Toggle Button State
        </button>
        <div style={{ width: '100vw', height: '100vh' }}>
          <UserList data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
