import React, { use } from "react"
import { Link, graphql } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ThankYou = ({ data }) => {

  const {t} = useTranslation()

  return (
    <>
      <PageHead
        title={"Thank You - The Big Give"}
        description={
          "Thank you for reaching out to us. We will get back to you as quickly as possible."
        }
      />
      <Layout>
        <AltHeader heading={`${t("thankyou.title")}`} />
        <PlainText>
          <p style={{ marginBottom: "15rem", textAlign: "center" }}>
            {t("thankyou.description")} <Link to={"/"}>{t("thankyou.cta")}.</Link>
          </p>
        </PlainText>
      </Layout>
    </>
  )
}

export default ThankYou

export const query = graphql`
  query ThankYouPageQuery($language: String!) {
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