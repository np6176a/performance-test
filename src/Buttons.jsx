import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

const Buttons = () => {
  const context = useContext(DataContext)
  return (
    <button
      onClick={context.setActive}
      style={context.active ? { background: '#09d3ac' } : { background: '#fff' }}
    >
      Show Active Users
    </button>
  )
}

export default Buttons
