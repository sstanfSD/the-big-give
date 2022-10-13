import React from "react"
import {
  ModalContainer,
  ModalScroll,
  Bio,
  BioLeft,
  TextContainer,
  Name,
  Role,
  BioText,
  CloseBtn,
} from "./ModalElements"

const Modal = ({ open, toggle, name, role, bio }) => {
  return (
    <ModalContainer open={open}>
      <ModalScroll>
        <BioLeft onClick={toggle} />
        <Bio>
          <TextContainer>
            {" "}
            <Name>{name}</Name>
            <Role>{role}</Role>
            <BioText dangerouslySetInnerHTML={{ __html: bio }} />
          </TextContainer>
        </Bio>
        <CloseBtn onClick={toggle}>
          <div />
          <div />
        </CloseBtn>
      </ModalScroll>
    </ModalContainer>
  )
}

export default Modal
