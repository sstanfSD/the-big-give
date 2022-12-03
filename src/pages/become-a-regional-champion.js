import React, { useState } from "react"
import { Link } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"
import EmailForm from "../components/Common/EmailForm"
import styled from "styled-components"

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
        <AltHeader heading={"Bring The Big Give to your area"} />
        <PlainText>
          <p style={{ marginBottom: "1rem" }}>
            <strong>
              Join our team and bring The Big Give to your region.
            </strong>
          </p>
          <br />
          <p>
            Here’s what it takes to be a regional champion:
            <ul>
              <li>
                1. Commit to The Big Give idea: One movement on one day where
                everything is free with no strings attached
              </li>
              <li>
                2. Read and agree with our{" "}
                <Link to={"/statement-of-faith"}>statement of faith</Link>
              </li>
              <li>
                {" "}
                3. Attend Big Give committee meetings either in person or online
              </li>
              <li>
                {" "}
                4. Enjoy connecting with other church leaders in your area We
                would love to chat if you’re passionate about seeing God move in
                your region, love outreach, and are committed to praying for The
                Big Give.
              </li>
            </ul>
          </p>
        </PlainText>

        <FormWrapper>
          <FormContainer>
            <FormHeading>Become a regional champion</FormHeading>
            <EmailForm />
          </FormContainer>
        </FormWrapper>
      </Layout>
    </>
  )
}

const FormWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`

const FormHeading = styled.span`
  display: block;
  font-family: var(--font-heading);
  font-size: var(--font-size-bodyM);
  text-align: center;
  width: 100%;

  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  max-width: 60rem;
  width: 100%;
  padding: 0 2.5rem 10rem;
`

export default BecomeAChampion
