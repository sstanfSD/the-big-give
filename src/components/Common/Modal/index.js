import React from "react"
import {
  ModalContainer,
  ModalScroll,
  ModalMain,
  ModalLeft,
  TextContainer,
  Heading,
  BtnWhite,
  CloseBtn,
} from "./ModalElements"

const Modal = ({ open, toggle }) => {
  return (
    <ModalContainer open={open}>
      <ModalScroll>
        <ModalLeft onClick={toggle} />

        <ModalMain>
          <TextContainer>
            <Heading>Choose your region</Heading>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.com/e/the-big-give-2023-ottawaottawa-valley-registration-383606606687"
            >
              {" "}
              Ottawa, Ottawa Valley
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2023-greater-toronto-area-gta-registration-384157394107"
            >
              {" "}
              GTA
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2023-quebec-registration-384758050687"
            >
              {" "}
              Quebec
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2023-all-other-communities-registration-384163642797"
            >
              {" "}
              all other communities
            </BtnWhite>
          </TextContainer>
        </ModalMain>
        <CloseBtn onClick={toggle}>
          <div />
          <div />
        </CloseBtn>
      </ModalScroll>
    </ModalContainer>
  )
}

export default Modal
