import React from 'react'

export const DataContext = React.createContext()

class DataProvider extends React.Component {
  state = {
    data: null,
    active: false,
  }

  loadData = () => {
    setInterval(
      fetch('/data.json')
        .then(response => response.json())
        .then(data => this.setState({ data })),
      100
    )
  }

  setActive = () => {
    this.setState({ active: !this.state.active })
  }

  componentDidMount () {
    this.loadData()
  }

  render () {
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
