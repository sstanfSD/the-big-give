import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  Section,
  Container,
  TextContainer,
  Heading,
  Body,
  TeamContainer,
  TopContainer,
  BottomContainer,
} from "./TeamElements"

import Card from "./Card"

import { BtnPrimaryLink } from "../../Buttons"

const Team = ({ team }) => {
  return (
    <Section id="team">
      <Container>
        <TextContainer>
          <Heading>The Big Give team</Heading>
          <Body>
            We’re a group of volunteers who have seen how much God can use our
            free gifts to build bridges between our churches and the communities
            they serve.
          </Body>
          <BtnPrimaryLink to={"/about#contact"} text={"join the team"} large />
        </TextContainer>
        <TeamContainer>
          <TopContainer>
            {team.nodes.map((member, i) => {
              if (member.teamMembers.director) {
                return (
                  <Card
                    key={i}
                    image={
                      member.teamMembers.profileImage.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={member.teamMembers.profileImage.altText}
                    name={member.teamMembers.name}
                    role={member.teamMembers.role}
                    bio={member.teamMembers.bio}
                  />
                )
              }
            })}
          </TopContainer>
          <BottomContainer>
            {team.nodes.map((member, i) => {
              if (!member.teamMembers.director) {
                return (
                  <Card
                    key={i}
                    image={
                      member.teamMembers.profileImage.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={member.teamMembers.profileImage.altText}
                    name={member.teamMembers.name}
                    role={member.teamMembers.role}
                    bio={member.teamMembers.bio}
                  />
                )
              }
            })}
          </BottomContainer>
        </TeamContainer>
      </Container>
    </Section>
  )
}

export default Team
