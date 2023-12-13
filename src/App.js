import React from 'react'
import Dropdown from './components/Drowdown/Dropdown'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div>
      <Dropdown >
        <Menu/>
        <Dropdown.Toggle/>
      </Dropdown>
    </div>
  )
}

export default App