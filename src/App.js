import React, { useState } from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'
import DataProvider from './DataProvider'
import Buttons from './Buttons'

function App () {
  // const [data, setData] = useState(null)
  //
  // const loadData = () => {
  //   fetch('/data.json')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // }
  //
  // loadData()
  //
  // if (data === null) {
  //   return 'Loading...'
  // }

  return (
    <div className="App row">
      <header className='col-xs-12'>
        Perfomance Test
      </header>
      <div className='col-xs-12 row content'>
        <DataProvider>
          <Buttons />
          <UserList />
        </DataProvider>
      </div>
    </div>
  )
}

export default App
