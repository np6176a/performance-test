import React from 'react'
import './App.css'
import UserList from './UserList'

class App extends React.Component {
  state = {
    data: null
  }

  loadData () {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  componentDidMount () {
    this.loadData()
  }

  render () {
    const { data } = this.state
    if(data === null) {
      return 'Loading...'
    }
    return (
      <div className="App row">
        <header className='col-xs-12'>
          Perfomance Test
        </header>
        <div className='col-xs-12'>
          <UserList data={data} />
        </div>
      </div>
    )
  }

}

export default App
