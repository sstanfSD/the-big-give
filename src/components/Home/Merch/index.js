import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { Section, Container, Heading, Body } from "./MerchElements"
import { BtnPrimaryExternal } from "../../Buttons"

const MERCH_URL =
  "https://gilkssportspromo.square.site/shop/big-give/VEOY6PHL2QPIM6RRC2NQQWGR"

const Merch = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Container>
        <Heading>{t("merch.title")}</Heading>
        <Body>{t("merch.description")}</Body>
        <BtnPrimaryExternal text={t("merch.cta")} to={MERCH_URL} large />
      </Container>
    </Section>
  )
}

export default Merch
