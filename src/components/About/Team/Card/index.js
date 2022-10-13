import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { CardContainer, CardText, Name, Role } from "./CardElements"

import Modal from "../Modal"

const Card = ({ image, name, role, bio, alt }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <CardContainer onClick={toggle}>
        <GatsbyImage image={image} alt={alt} />
        <CardText>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </CardText>
      </CardContainer>
      <Modal open={open} toggle={toggle} name={name} role={role} bio={bio} />
    </div>
  )
}

export default Card
