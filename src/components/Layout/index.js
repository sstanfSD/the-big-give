import React from "react"

import { Main } from "./LayoutElements"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Main></Main>
      <Footer />
    </div>
  )
}

export default Layout
