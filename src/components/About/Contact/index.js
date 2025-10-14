import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import {
  Section,
  Container,
  FormContainer,
  TextContainer,
  Heading,
  Body,
  ImageContainer,
} from "./ContactElements"

import Form from "./Form"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Contact = () => {

  const { t } = useTranslation()

  return (
    <Section id="contact">
      <Container>
        <FormContainer>
          <TextContainer>
            <Heading>{t("about.contact.title")}</Heading>
            <Body>
              {t("about.contact.subtitle")}
            </Body>
          </TextContainer>
          <Form />
        </FormContainer>
        <ImageContainer>
          <StaticImage
            src={"../../../assets/images/about/contact/contact.jpg"}
            alt="Kathy and Wayne, directors of the Big Give."
          />
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default Contact
