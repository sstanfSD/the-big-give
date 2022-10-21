import React from "react"
import "../../css/typography.css"
import GlobalStyle from "../../../globalStyles"
import { Wrapper, Main } from "./LayoutElements"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, toggle }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar toggle={toggle} />
        <Main>{children}</Main>
        <Footer toggle={toggle} />
      </Wrapper>
    </>
  )
}

export default Layout
