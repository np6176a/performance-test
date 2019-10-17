import React, { useState } from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'

function App () {
  const [data, setData] = useState(null)

  const loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }

  return (
    <div className="App row">
      <header className='col-xs-12'>
        Perfomance Test
      </header>
      <div className='col-xs-12 row content'>
        {
          data == null ?
            <button onClick={loadData}>Load User Data</button>
            : <UserList data={data} />
        }
      </div>
    </div>
  )
}

export default App
