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

import contact from "../../../assets/images/about/contact/contact.jpg"

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <FormContainer>
          <TextContainer>
            <Heading>Get in touch</Heading>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Body>
          </TextContainer>
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
