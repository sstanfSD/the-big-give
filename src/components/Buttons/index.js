import React from "react"
import { Link } from "gatsby"

import { ButtonPrimary, ButtonPrimaryBlue } from "./ButtonElements"

export const BtnPrimary = ({ text, large, toggle }) => {
  return (
    <ButtonPrimary onClick={toggle} large={large}>
      {text}
    </ButtonPrimary>
  )
}

export const BtnPrimaryLink = ({ text, large, to }) => {
  return (
    <Link to={to}>
      <ButtonPrimary large={large}>{text}</ButtonPrimary>
    </Link>
  )
}

export const BtnPrimaryBlue = ({ text, to, large }) => {
  return (
    <Link to={to}>
      <ButtonPrimaryBlue large={large}>{text}</ButtonPrimaryBlue>
    </Link>
  )
}

export const BtnPrimaryExternal = ({ text, to }) => {
  return (
    <a href={to} target="_blank">
      <ButtonPrimary>{text}</ButtonPrimary>
    </a>
  )
}
