import React from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'
import DataProvider from './DataProvider'
import Buttons from './Buttons'

class App extends React.Component {
  state = {
    data: null
  }

  loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }


  componentDidMount () {
    // this.runLoadData()
    this.loadData()
  }

  render () {
    const { data, active } = this.state
    return (
      <div className="App row">
        <header className='col-xs-12'>
          Perfomance Test
        </header>
        <div className='col-xs-12 row content'>
          <DataProvider>
            <Buttons  />
            <UserList data={data} />
          </DataProvider>
        </div>
      </div>
    )
  }

}

export default App
