import React from 'react'

export const DataContext = React.createContext()

class DataProvider extends React.Component {
  state = {
    data: null,
    active: false,
  }

  loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  setActive = () =>{
    this.setState({ active: !this.state.active })
  }

  runLoadData = () => {
    setInterval(this.loadData, 500)
  }

  // componentDidMount () {
  //   this.runLoadData()
  // }

  render () {
    this.runLoadData()
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          loadData: this.loadData,
          setActive: this.setActive
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataProvider
