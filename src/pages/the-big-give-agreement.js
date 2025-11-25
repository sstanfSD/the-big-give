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
        title={"The Big Give Agreement"}
        description={
          "The Big Give is organized by volunteers and groups from many different Christian traditions, but we’re inspired by a common profession of faith."
        }
      />
      <Layout>
        <AltHeader heading={t("agreement.page.title")} />
        <PlainText>
          <h2>{t("agreement.section.title")}</h2>
          <ul>
            <li>
              <h3>
                {t("agreement.item1.title")}
              </h3>
              <p>
                {t("agreement.item1.content")}
              </p>
            </li>
            <li>
              <h3>{t("agreement.item2.title")}</h3>
              <p>
                {t("agreement.item2.content")}
              </p>
            </li>
            <li>
              <h3>{t("agreement.item3.title")}</h3>
              <p>
                {t("agreement.item3.content")}
              </p>
            </li>
            <li>
              <h3>{t("agreement.item4.title")}</h3>
              <p>
                {t("agreement.item4.content")}
              </p>
            </li>
            <li>
              <h3>{t("agreement.item5.title")}</h3>
              <p>
                {t("agreement.item5.content")}
              </p>
            </li>
            <li>
              <h3>{t("agreement.item6.title")}</h3>
              <p>
                {t("agreement.item6.content")}
              </p>
            </li>
          </ul>
        </PlainText>
      </Layout>
    </>
  )
}

export default StatementOfFaith

// 🟢 Add the translation query below
export const query = graphql`
  query StatementOfFaithQuery($language: String!) {
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
