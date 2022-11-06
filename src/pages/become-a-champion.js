import React, { useState } from "react"
import { Link } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"

const BecomeAChampion = ({ data }) => {
  return (
    <>
      <PageHead
        title={"Thank You - The Big Give"}
        description={
          "  Thank you for reaching out to us. We will get back to you as quickly as possible."
        }
      />
      <Layout>
        <AltHeader heading={"Become a regional champion"} />
        <PlainText>
          <p style={{ marginBottom: "15rem", textAlign: "center" }}>
            Thank you for reaching out to us. We will get back to you as quickly
            as possible. <Link to={"/"}>Click here to go back to home.</Link>
          </p>
        </PlainText>
      </Layout>
    </>
  )
}

export default BecomeAChampion
