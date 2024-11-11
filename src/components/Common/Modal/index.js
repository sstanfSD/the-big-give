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
            {/* <Heading>
              Registration will be available in the Fall of 2024.
            </Heading> */}
            <BtnWhite
              large
              target="_blank"
              href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E343462QE&id=182"
            >
              {" "}
              Ottawa, Ottawa Valley
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E343462QE&id=182"
            >
              {" "}
              GTA
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E343462QE&id=182"
            >
              {" "}
              Quebec
            </BtnWhite>
            <BtnWhite
              large
              target="_blank"
              href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E343462QE&id=182"
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
