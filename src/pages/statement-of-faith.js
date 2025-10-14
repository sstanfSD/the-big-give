import React, { useState } from "react"
import { graphql } from "gatsby"
import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"

import {useTranslation} from "gatsby-plugin-react-i18next"

const StatementOfFaith = ({ data }) => {

  const { t } = useTranslation()

  return (
    <>
      <PageHead
        title={"Statement of Faith"}
        description={
          "The Big Give is organized by volunteers and groups from many different Christian traditions, but we’re inspired by a common profession of faith."
        }
      />
      <Layout>
        <AltHeader heading={t("statementOfFaith.page.title")} />
        <PlainText>
          <p>
            {t("statementOfFaith.page.description")}
            <br />
            <br />
            <strong>{t("statementOfFaith.creed.title")}</strong>
            <br />
              {t("statementOfFaith.creed.line1")}
            <br />
              {t("statementOfFaith.creed.line2")}
            <br />
              {t("statementOfFaith.creed.line3")}
            <br />
              {t("statementOfFaith.creed.line4")}
            <br />
              {t("statementOfFaith.creed.line6")}
            <br />
              {t("statementOfFaith.creed.line7")}
            <br />
              {t("statementOfFaith.creed.line8")}
            <br />
              {t("statementOfFaith.creed.line9")}
            <br />
              {t("statementOfFaith.creed.line10")}
            <br />
              {t("statementOfFaith.creed.line11")}
            <br />
              {t("statementOfFaith.creed.line12")}
            <br />
              {t("statementOfFaith.creed.line13")}
            <br />
              {t("statementOfFaith.creed.line14")}
            <br />
              {t("statementOfFaith.creed.line15")}
            <br />
              {t("statementOfFaith.creed.line16")}
            <br />
              {t("statementOfFaith.creed.line17")}
            <br />
              {t("statementOfFaith.creed.line18")}
          </p>
        </PlainText>
      </Layout>
    </>
  )
}

export default StatementOfFaith

// 🟢 Add translation query here
export const query = graphql`
  query StatementOfFaithPageQuery($language: String!) {
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
