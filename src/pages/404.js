import React, { useState } from "react"
import { Link } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"

const StatementOfFaith = ({ data }) => {
  return (
    <>
      <PageHead
        title={"Statement of faith"}
        description={"404 Page Not Found"}
      />
      <Layout>
        <AltHeader heading={"The Big Give Agreement"} />
        <PlainText>
          <p>
            We're sorry, we couldnt find what you were looking for.
            <br />
            <Link to={"/"}>Click here to return home</Link>.
          </p>
        </PlainText>
      </Layout>
    </>
  )
}

export default StatementOfFaith
