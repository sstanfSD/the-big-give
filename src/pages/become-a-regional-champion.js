import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"
import EmailForm from "../components/Common/EmailForm"
import styled from "styled-components"
import { useTranslation } from "gatsby-plugin-react-i18next"

const BecomeAChampion = ({ data }) => {
  const { t } = useTranslation()

  return (
    <>
      <PageHead
        title={"Thank You - The Big Give"}
        description={
          "Thank you for reaching out to us. We will get back to you as quickly as possible."
        }
      />
      <Layout>
        <AltHeader heading={t("champion.page.title")} />
        <PlainText>
          <p style={{ marginBottom: "1rem" }}>
            <strong>
              {t("champion.hero.subtitle")}
            </strong>
          </p>
          <br />
          <p>
            {t("champion.requirements.intro")}
            <ul>
              <li>
                1. {t("champion.requirements.item1")}
              </li>
              <li>
                2. {t("champion.requirements.item2")}{" "}
                <Link to={"/statement-of-faith"}>{t("champion.requirements.item2Link")}</Link>
              </li>
              <li>
                3. {t("champion.requirements.item3")}
              </li>
              <li>
                4. {t("champion.requirements.item4")}
              </li>
            </ul>
          </p>
        </PlainText>

        <FormWrapper>
          <FormContainer>
            <FormHeading>{t("champion.form.title")}</FormHeading>
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

// 🟢 Add this translation query at the bottom
export const query = graphql`
  query BecomeAChampionQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
