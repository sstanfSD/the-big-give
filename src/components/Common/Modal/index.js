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

const Modal = ({ openModal, toggleModal }) => {
  return (
    <ModalContainer open={openModal}>
      <ModalScroll>
        <ModalLeft onClick={toggleModal} />

        <ModalMain>
          <TextContainer>
            <Heading>Choose your region</Heading>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2024-ottawaottawa-valley-registration-654039107577"
            >
              {" "}
              Ottawa, Ottawa Valley
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2024-greater-toronto-area-gta-registration-654046258967"
            >
              {" "}
              GTA
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2023-quebec-registration-654050461537"
            >
              {" "}
              Quebec
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://www.eventbrite.ca/e/the-big-give-2024-all-other-communities-registration-654035707407"
            >
              {" "}
              All Other Communities
            </BtnWhite>
          </TextContainer>
        </ModalMain>
        <CloseBtn onClick={toggleModal}>
          <div />
          <div />
        </CloseBtn>
      </ModalScroll>
    </ModalContainer>
  )
}

export default Modal
