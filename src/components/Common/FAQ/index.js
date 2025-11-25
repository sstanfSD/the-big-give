import React from "react"
import { Link } from "gatsby"
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
import { useTranslation } from "gatsby-plugin-react-i18next"

const FAQ = () => {
  const { t } = useTranslation()

  // Build FAQ list directly from numbered keys
  const faqs = []
  for (let i = 1; i < 100; i++) {
    const qKey = `faq.question${i}`
    const aKey = `faq.answer${i}`
    const q = t(qKey)
    if (q === qKey) break // stop when no more questions

    // special handling for first FAQ (has intro + list items)
    if (i === 1) {
      const intro = t(`${aKey}.intro`, { defaultValue: "" })
      const items = []
      for (let j = 1; j <= 30; j++) {
        const itemKey = `${aKey}.item${j}`
        const item = t(itemKey)
        if (item === itemKey) break
        items.push(item)
      }
      faqs.push({ question: q, intro, items })
    } else {
      const a = t(aKey, { defaultValue: "" })
      faqs.push({ question: q, answer: a })
    }
  }

  return (
    <Section>
      <Container>
        <HeadingContainer>
          <Heading>
            {t("faq.title1")} <br /> {t("faq.title2")}
          </Heading>
          <Contact>
            {t("faq.subtitle")}
            <br />
            <Link to={"/about#contact"}>{t("faq.contact")}</Link>.
          </Contact>
        </HeadingContainer>

        <QuestionsContainer>
          {faqs.map((item, i) => (
            <QuestionContainer key={i}>
              <Question index={i + 1} {...item} />
            </QuestionContainer>
          ))}

          <ContactMobile>
            {t("faq.subtitle")}
            <br />
            <Link to={"/about#contact"}>{t("faq.contact")}</Link>.
          </ContactMobile>
        </QuestionsContainer>
      </Container>
    </Section>
  )
}

export default FAQ