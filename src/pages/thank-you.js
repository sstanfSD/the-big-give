import React, { useState } from "react"
import { Link } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"

const StatementOfFaith = ({ data }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <PageHead
        title={"Thank You - The Big Give"}
        description={
          "  Thank you for reaching out to us. We will get back to you as quickly as possible."
        }
      />
      <Layout toggle={toggle}>
        <Modal toggle={toggle} open={open} />
        <AltHeader heading={"Thank You!"} />
        <PlainText>
          <p>
            Thank you for reaching out to us. We will get back to you as quickly
            as possible. <Link to={"/"}>Click here to go back to home.</Link>
          </p>
        </PlainText>
      </Layout>
    </>
  )
}

export default StatementOfFaith
