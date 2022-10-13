import React from "react"
import "../../css/typography.css"
import GlobalStyle from "../../../globalStyles"
import { Wrapper, Main } from "./LayoutElements"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
