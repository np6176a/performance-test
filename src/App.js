import React from 'react'
import 'flexboxgrid'
import './App.css'
import UserList from './UserList'
import DataProvider from './DataProvider'

class App extends React.Component {
  state = {
    data: null
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
    return (
      <div className="App row">
        <header className='col-xs-12'>
          Perfomance Test
        </header>
        <div className='col-xs-12 row content'>
          <DataProvider>
            <button
              onClick={this.setActive}
              style={active ? { background: '#09d3ac' } : { background: '#fff' }}
            >
              Show Button State
            </button>
            <UserList data={data} />
          </DataProvider>
        </div>
      </div>
    )
  }

}

export default App
