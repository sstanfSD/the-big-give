import React, { useState, useEffect, useRef } from "react"

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
  const cardsRef = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollHandler = () => {
    console.log(Math.round(cardsRef.current.getBoundingClientRect().y))

    // setScrollPosition(Math.round(cardsRef.current.getBoundingClientRect().y))
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true)
    return () => {
      window.removeEventListener("scroll", scrollHandler, true)
    }
  }, [])

  return (
    <Section ref={cardsRef} height={champions.nodes.length}>
      <Container>
        <TextContainer className="card-text">
          <Heading>Connect with a big give champion in your area</Heading>
          <Body>
            The Big Give is run by passionate servant leaders who volunteer
            their time. Some of the biggest heroes of this ministry are our
            regional champions. They help mobilize churches in their area to
            join this life-changing movement.
            <br />
            <br />
            Click on your community to connect with your regional champion.
            Don’t see your town? Click below to learn more about becoming a
            regional champion yourself.
          </Body>
          <BtnPrimary to={"/about#contact"} text={"become a champion"} large />
        </TextContainer>
        <CardsContainer scrollPosition={scrollPosition}>
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
