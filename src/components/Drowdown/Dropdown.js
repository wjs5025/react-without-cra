import React, { createContext, useContext } from 'react'
import useToggle from '../../hooks/useToggle';

export const DropdownContext = createContext(false);

function Dropdown(props) {
    const [isOpen, toggleIsOpen] = useToggle();

    const providerValue = {
        isOpen,
        toggleIsOpen
    }

  return (
    <DropdownContext.Provider value={providerValue}>
        {props.children}
    </DropdownContext.Provider>
  )
}

 function ToggleBtn () {
    const { toggleIsOpen } = useContext(DropdownContext);
    return <button onClick={toggleIsOpen}>toggle!</button>
}

Dropdown.Toggle = ToggleBtn;

export default Dropdown;