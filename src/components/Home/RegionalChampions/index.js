import React from "react"

import {
  Section,
  Container,
  TextContainer,
  Heading,
  Body,
  CardsContainer,
} from "./RegionalChampionsElements"

import Card from "./Card"

import { BtnPrimary } from "../../Buttons/"

const RegionalChampions = ({ champions }) => {
  return (
    <Section>
      <Container>
        <TextContainer className="card-text">
          <Heading>Connect with a big give champion in your area</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Body>
          <BtnPrimary to={"/about#contact"} text={"become a champion"} />
        </TextContainer>
        <CardsContainer>
          {champions.nodes.map((champion, i) => {
            return (
              <Card
                key={i}
                bg={i}
                location={champion.title}
                image={
                  champion.regionalChampion.regionImage.localFile
                    .childImageSharp.gatsbyImageData
                }
                alt={champion.regionalChampion.regionImage.alt}
                champion={champion.regionalChampion.champion}
              />
            )
          })}
        </CardsContainer>
      </Container>
    </Section>
  )
}

export default RegionalChampions
