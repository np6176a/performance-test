import React from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'

class App extends React.Component {
  state = {
    data: null
  }

  loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render () {
    const { data } = this.state
    return (
      <div className="App row">
        <header className='col-xs-12'>
          Perfomance Test
        </header>
        <div className='col-xs-12 row content'>
          {data === null
            ? <button onClick={this.loadData}>Load User Data</button>
            : <UserList data={data} />
          }
        </div>
      </div>
    )
  }

}

export default App
