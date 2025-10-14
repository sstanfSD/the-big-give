import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  HeadingContainer,
  Heading,
  Contact,
  ContactMobile,
  QuestionsContainer,
  QuestionContainer,
} from "./FAQElements"

import Question from "./Question"
import {useTranslation} from "gatsby-plugin-react-i18next"

const FAQ = ({ FAQs }) => {

  const {t} = useTranslation();

  return (
    <Section>
      <Container>
        <HeadingContainer>
          <Heading>
            {t("faq.title1")} <br></br>{t("faq.title2")}
          </Heading>
          <Contact>
            {t("faq.subtitle")}
            <br />
            <Link to={"/about#contact"}>{t("faq.contact")}</Link>.
          </Contact>
        </HeadingContainer>
        <QuestionsContainer>
          {FAQs.nodes.map((FAQ, i) => {
            return (
              <QuestionContainer key={i}>
                <Question question={FAQ.faq.question} answer={FAQ.faq.answer} />
              </QuestionContainer>
            )
          })}
          <ContactMobile>
            Is your question not answered?
            <br />
            <Link to={"/about#contact"}>Contact us directly</Link>.
          </ContactMobile>
        </QuestionsContainer>
      </Container>
    </Section>
  )
}

export default FAQ
