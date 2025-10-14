import React from "react"

import {
  Section,
  Container,
  TimelineContainer,
  TextContainer,
  Heading,
  Body,
} from "./HistoryElements"

import Timeline from "./Timeline"
import { useTranslation } from "gatsby-plugin-react-i18next"

const History = () => {

  const { t } = useTranslation()

  return (
    <Section id="history">
      <Container>
        <TimelineContainer>
          <Timeline />
        </TimelineContainer>
        <TextContainer>
          <Heading>{t("about.history.title")}</Heading>
          <Body>
            <p>
              {t("about.history.paragraph1")}
            </p>
            <p>
              {t("about.history.paragraph2")}
            </p>
            <p>
              {t("about.history.paragraph3")}{" "}
            </p>
            <p>
              {t("about.history.paragraph4")}
            </p>
          </Body>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default History
