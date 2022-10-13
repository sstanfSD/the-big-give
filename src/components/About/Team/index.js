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

import { BtnPrimary } from "../../Buttons"

const Team = ({ team }) => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>The Big Give team</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Body>
          <BtnPrimary to={"/about#contact"} text={"join the team"} large />
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
