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

const FAQ = ({ FAQs }) => {
  return (
    <Section>
      <Container>
        <HeadingContainer>
          <Heading>
            Frequently <br></br>asked questions
          </Heading>
          <Contact>
            Is your question not answered?
            <br />
            <Link to={"/about#contact"}>Contact us directly</Link>.
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
