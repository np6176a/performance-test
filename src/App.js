import React from 'react'
import './App.css'

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
    return (
      <div className="App row">
        <header className='col-xs-12'>
          Perfomance Test
        </header>
        <div className='col-xs-12'>
          No Data Yet!!
        </div>
      </div>
    )
  }

}

export default App
