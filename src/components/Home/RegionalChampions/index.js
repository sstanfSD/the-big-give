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

import { BtnPrimaryLink } from "../../Buttons/"
import {useTarnslation, useTranslation} from "gatsby-plugin-react-i18next"

const RegionalChampions = ({ champions }) => {
  const {t} = useTranslation()
  const cardsRef = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollHandler = () => {
    setScrollPosition(Math.round(cardsRef.current.getBoundingClientRect().y))
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
          <Heading>{t("champion.title")}</Heading>
          <Body>
            {/* The Big Give is run by passionate servant leaders who volunteer
            their time. Some of the biggest heroes of this ministry are our
            regional champions. They help mobilize churches in their area to
            join this life-changing movement.
            <br />
            <br /> */}
            {t("champion.subtitle")}
          </Body>
          <BtnPrimaryLink
            to={"/become-a-regional-champion"}
            text={t("champion.cta")}
            large
          />
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
