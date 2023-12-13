import React, { useContext } from 'react'
import { DropdownContext } from '../Drowdown/Dropdown'

function Menu() {
  const {isOpen} = useContext(DropdownContext)

  return isOpen && (
    <div>Menu</div>
  )
}

export default Menu;