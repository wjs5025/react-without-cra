import React from 'react'
import Menu from '../Menu/Menu'
import Dropdown from './Dropdown'

function DropdownPractice() {
  return (
    <Dropdown >
        <Menu/>
        <Dropdown.Toggle/>
      </Dropdown>
  )
}

export default DropdownPractice