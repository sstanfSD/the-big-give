import React, { useState, useEffect, useRef } from "react"

import {
  DropdownContainer,
  Selected,
  Btn,
  List,
  Item,
} from "./DropdownElements"

import downIcon from "../../../../assets/icons/down-arrow.svg"

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener("click", onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      })
    }
  }, [])

  const renderedOptions = options.map((option, i) => {
    if (option === selected) {
      return null
    }

    return (
      <Item
        key={i}
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option}
      </Item>
    )
  })

  return (
    <DropdownContainer ref={ref} onClick={toggle}>
      <Selected open={open}>
        <span>{selected}</span>
        <Btn src={downIcon} alt="Filter Btn" />
      </Selected>
      <List open={open}>{renderedOptions}</List>
    </DropdownContainer>
  )
}

export default Dropdown
