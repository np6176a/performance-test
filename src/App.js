import React from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'

class App extends React.Component {

  state = {
    data: null,
    active: false
  }

  loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  setActive = () => {
    this.setState({ active: !this.state.active })
  }

  componentDidMount () {
    this.loadData()
  }

  render () {

    const { data, active } = this.state
    if (data === null) {
      return <button>Loading Data</button>
    }

    return (
      <div className="App row">
        <header className='col-xs-12'>
          Perfomance Test
        </header>
        <div className='col-xs-12 row content'>
          <button
            onClick={this.setActive}
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
}

export default App
