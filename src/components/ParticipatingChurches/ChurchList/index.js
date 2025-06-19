import React, { useState, useEffect } from "react"

import {
  Section,
  Container,
  Sidebar,
  ContentContainer,
  Heading,
  BtnList,
  BtnListItem,
  BtnWhite,
  RegisterBtn,
  ListContainer,
  ListHeading,
  ChurchListElement,
  ChurchListItem,
  Name,
  Address,
  Time,
  Details,
} from "./ChurchListElements"

const ChurchList = ({ churches, toggle }) => {
  //LIST SELECTION LOGIC

  const options = [
    "Ottawa, Ottawa Valley",
    "GTA",
    "Quebec",
    "all other communities",
  ]

  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(options[0])

  const handleSelection = option => {
    if (option === "Ottawa, Ottawa Valley") {
      setSelected(options[0])
    } else if (option === "GTA") {
      setSelected(options[1])
    } else if (option === "Quebec") {
      setSelected(options[2])
    } else if (option === "all other communities") {
      setSelected(options[3])
    } else return

    // Scroll to list on mobile
    scrollToList()
  }

  const scrollToList = () => {
    // Check if we're on mobile (tablet portrait and below)
    if (window.innerWidth <= 900) {
      // tabport breakpoint

      setTimeout(() => {
        const listElement = document.getElementById("list-heading")
        if (listElement) {
          listElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }
  }

  useEffect(() => {}, [])

  return (
    <Section>
      <Container>
        <Sidebar>
          <ContentContainer>
            <Heading id="list">Participating Churches 2025</Heading>
            <BtnList>
              {options.map((option, i) => {
                if (selected === option) {
                  return (
                    <BtnListItem key={i}>
                      <BtnWhite
                        active
                        large
                        onClick={e => {
                          handleSelection(option)
                        }}
                      >
                        {option}
                      </BtnWhite>
                    </BtnListItem>
                  )
                } else
                  return (
                    <BtnListItem key={i}>
                      <BtnWhite
                        large
                        onClick={e => {
                          handleSelection(option)
                        }}
                      >
                        {option}
                      </BtnWhite>
                    </BtnListItem>
                  )
              })}
              <BtnListItem>
                <RegisterBtn large onClick={toggle}>
                  register your church
                </RegisterBtn>
              </BtnListItem>
            </BtnList>
          </ContentContainer>
        </Sidebar>
        <ListContainer id="list">
          <ChurchListElement>
            <ListHeading id="list-heading">{selected}</ListHeading>
            {churches.nodes.map((church, i) => {
              if (selected === options[0]) {
                if (church.participatingChurch.region === options[0]) {
                  return (
                    <ChurchListItem key={i}>
                      <Name>{church.participatingChurch.churchName}</Name>
                      <Address>
                        {church.participatingChurch.churchAddress}
                      </Address>
                      <Time>{church.participatingChurch.eventTime}</Time>
                      <Details>
                        {church.participatingChurch.eventDetails}
                      </Details>
                    </ChurchListItem>
                  )
                }
              }

              if (selected === options[1]) {
                if (church.participatingChurch.region === options[1]) {
                  return (
                    <ChurchListItem key={i}>
                      <Name>{church.participatingChurch.churchName}</Name>
                      <Address>
                        {church.participatingChurch.churchAddress}
                      </Address>
                      <Time>{church.participatingChurch.eventTime}</Time>
                      <Details>
                        {church.participatingChurch.eventDetails}
                      </Details>
                    </ChurchListItem>
                  )
                }
              }

              if (selected === options[2]) {
                if (church.participatingChurch.region === options[2]) {
                  return (
                    <ChurchListItem key={i}>
                      <Name>{church.participatingChurch.churchName}</Name>
                      <Address>
                        {church.participatingChurch.churchAddress}
                      </Address>
                      <Time>{church.participatingChurch.eventTime}</Time>
                      <Details>
                        {church.participatingChurch.eventDetails}
                      </Details>
                    </ChurchListItem>
                  )
                }
              }

              if (selected === options[3]) {
                if (church.participatingChurch.region === "Other") {
                  return (
                    <ChurchListItem key={i}>
                      <Name>{church.participatingChurch.churchName}</Name>
                      <Address>
                        {church.participatingChurch.churchAddress}
                      </Address>
                      <Time>{church.participatingChurch.eventTime}</Time>
                      <Details>
                        {church.participatingChurch.eventDetails}
                      </Details>
                    </ChurchListItem>
                  )
                }
              }
            })}
          </ChurchListElement>
        </ListContainer>
      </Container>
    </Section>
  )
}

export default ChurchList
