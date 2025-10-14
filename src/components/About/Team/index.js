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
import {useTranslation} from "gatsby-plugin-react-i18next"

const Team = ({ team }) => {

  const { t } = useTranslation()

  return (
    <Section id="team">
      <Container>
        <TextContainer>
          <Heading>{t("about.team.title")}</Heading>
          <Body>
            {t("about.team.subtitle")}
          </Body>
          <BtnPrimaryLink to={"/about#contact"} text={t("about.cta")} large />
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
