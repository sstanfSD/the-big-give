import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
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
  const { t, i18n } = useTranslation()

  // helper to translate Director or other roles
  const getTranslatedRole = (member) => {
    const { director, role, name } = member.teamMembers
    const cleanRole = role?.trim() || ""
    const lang = i18n.language // "en" or "fr"

    // 🟢 Special rule for Kathy Blakely
    if (name === "Kathy Blakely" && director) {
      return lang === "fr" ? "Directrice" : "Director"
    }

    // 🟡 Normal Director translation
    if (director) {
      return t("Director", "Director")
    }

    // 🔵 Role (e.g., Administrative Assistant)
    if (cleanRole) {
      return t(cleanRole, cleanRole)
    }

    return null
  }

  return (
    <Section id="team">
      <Container>
        <TextContainer>
          <Heading>{t("about.team.title")}</Heading>
          <Body>{t("about.team.subtitle")}</Body>
          <BtnPrimaryLink to={"/about#contact"} text={t("about.cta")} large />
        </TextContainer>

        <TeamContainer>
          {/* Directors */}
          <TopContainer>
            {team.nodes
              .filter((m) => m.teamMembers.director)
              .map((member, i) => {
                const { teamMembers } = member
                const translatedRole = getTranslatedRole(member)

                return (
                  <Card
                    key={i}
                    image={
                      teamMembers.profileImage.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={teamMembers.profileImage.altText}
                    name={teamMembers.name}
                    role={translatedRole}
                    bio={teamMembers.bio}
                  />
                )
              })}
          </TopContainer>

          {/* Non-directors */}
          <BottomContainer>
            {team.nodes
              .filter((m) => !m.teamMembers.director)
              .map((member, i) => {
                const { teamMembers } = member
                const translatedRole = getTranslatedRole(member)

                return (
                  <Card
                    key={i}
                    image={
                      teamMembers.profileImage.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={teamMembers.profileImage.altText}
                    name={teamMembers.name}
                    role={translatedRole}
                    bio={teamMembers.bio}
                  />
                )
              })}
          </BottomContainer>
        </TeamContainer>
      </Container>
    </Section>
  )
}

export default Team