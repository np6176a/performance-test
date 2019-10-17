import React from 'react'

export const DataContext = React.createContext()

class DataProvider extends React.Component {
  state = {
    data: null
  }

  loadData () {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render () {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          loadData: this.loadData
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataProvider
