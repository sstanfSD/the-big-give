import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import {
  CardsContainer,
  ImageContainer,
  TextContainer,
  Location,
  Champions,
  ChampionInfo,
  Name,
  Email,
} from "./CardElements"

const Card = ({ location, champion, image, alt, bg }) => {
  console.log(bg)

  return (
    <div className="card-wrapper">
      <CardsContainer>
        <ImageContainer>
          <GatsbyImage image={image} alt={alt} />
        </ImageContainer>
        <TextContainer bg={bg}>
          <Location>{location}</Location>
          <Champions>
            {champion.map((champion, i) => {
              return (
                <ChampionInfo key={i}>
                  <Name>
                    {champion.firstName} {champion.lastName}
                  </Name>
                  <Email href={`mailto:${champion.email}`}>
                    {champion.email}
                  </Email>
                </ChampionInfo>
              )
            })}
          </Champions>
        </TextContainer>
      </CardsContainer>
    </div>
  )
}

export default Card
