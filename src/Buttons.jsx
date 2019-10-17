import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

const Buttons = () => {
  const [active, setActive] = useState(false)

  // const setButton = () => {
  //   setActive(false)
  // }
  return (
    <button
      onClick={() => setActive(true)}
      style={active ? { background: '#09d3ac' } : { background: '#fff' }}
    >
      Show Current State Of The Button
    </button>
  )
}

export default Buttons
