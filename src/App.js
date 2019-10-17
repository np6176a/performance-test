import React from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'
import DataProvider from './DataProvider'
import Buttons from './Buttons'

function App () {
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
