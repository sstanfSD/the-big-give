import React, { useState } from "react"
import "../../css/typography.css"
import GlobalStyle from "../../../globalStyles"
import { Wrapper, Main } from "./LayoutElements"
import Modal from "../Common/Modal"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
    console.log(openModal)
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Modal openModal={openModal} toggleModal={toggleModal} />
        <Navbar toggleModal={toggleModal} />
        <Main>{children}</Main>
        <Footer toggleModal={toggleModal} />
      </Wrapper>
    </>
  )
}

export default Layout
