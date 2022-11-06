import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { BtnPrimary } from "../../Buttons"

import {
  Section,
  Container,
  Sidebar,
  RegisterBtn,
  ContentContainer,
  Heading,
  Body,
  BtnList,
  BtnListItem,
  BtnWhite,
  Contact,
  ListContainer,
  ListHeading,
  ImageContainer,
  TextContainer,
  EventListElement,
  EventListItem,
  Name,
  Address,
  Time,
  Details,
} from "./EventsElements"

import Modal from "./Modal"

const EventList = ({ events }) => {
  //MODAL LOGIC

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

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
  }

  return (
    <Section id="events">
      <Container>
        <Sidebar>
          <ContentContainer>
            <Heading>Events</Heading>
            <Body>
              There are regional events leading up to The Big Give on the first
              Saturday of June. Find prayer meetings, organizing events and
              other important dates in your region here.
            </Body>
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
                <Contact>
                  To register an event in your community, please email{" "}
                  <a href="mailto:janice@onewayministries.ca">
                    janice@onewayministries.ca
                  </a>
                </Contact>
                {/* <RegisterBtn large onClick={toggle}>
                  register an event
                </RegisterBtn> */}
              </BtnListItem>
            </BtnList>
          </ContentContainer>
        </Sidebar>
        <ListContainer>
          <EventListElement>
            <ListHeading>{selected}</ListHeading>

            {events.nodes.map((event, i) => {
              if (selected === options[0]) {
                if (event.events.region === options[0]) {
                  return (
                    <EventListItem key={i}>
                      <ImageContainer>
                        <GatsbyImage
                          image={
                            event.events.eventImage.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={event.events.eventImage.altText}
                        />
                      </ImageContainer>
                      <TextContainer>
                        <Name>{event.title}</Name>
                        <Time>
                          <Time>{event.events.date}</Time> {"  "}|{"  "}
                          {event.events.startTime} -{" "}
                          <Time>{event.events.endTime} </Time>
                        </Time>
                        <Address>{event.events.address}</Address>
                        <Details
                          dangerouslySetInnerHTML={{
                            __html: event.events.eventDetails,
                          }}
                        />
                      </TextContainer>
                    </EventListItem>
                  )
                }
              }

              if (selected === options[1]) {
                if (event.events.region === options[1]) {
                  return (
                    <EventListItem key={i}>
                      <ImageContainer>
                        <GatsbyImage
                          image={
                            event.events.eventImage.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={event.events.eventImage.altText}
                        />
                      </ImageContainer>
                      <TextContainer>
                        <Name>{event.title}</Name>
                        <Time>
                          <Time>{event.events.date}</Time> {"  "}|{"  "}
                          {event.events.startTime} -{" "}
                          <Time>{event.events.endTime} </Time>
                        </Time>
                        <Address>{event.events.address}</Address>
                        <Details
                          dangerouslySetInnerHTML={{
                            __html: event.events.eventDetails,
                          }}
                        />
                      </TextContainer>
                    </EventListItem>
                  )
                }
              }

              if (selected === options[2]) {
                if (event.events.region === options[2]) {
                  return (
                    <EventListItem key={i}>
                      <ImageContainer>
                        <GatsbyImage
                          image={
                            event.events.eventImage.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={event.events.eventImage.altText}
                        />
                      </ImageContainer>
                      <TextContainer>
                        <Name>{event.title}</Name>
                        <Time>
                          <Time>{event.events.date}</Time> {"  "}|{"  "}
                          {event.events.startTime} -{" "}
                          <Time>{event.events.endTime} </Time>
                        </Time>
                        <Address>{event.events.address}</Address>
                        <Details
                          dangerouslySetInnerHTML={{
                            __html: event.events.eventDetails,
                          }}
                        />
                      </TextContainer>
                    </EventListItem>
                  )
                }
              }

              if (selected === options[3]) {
                if (event.events.region === "Other") {
                  return (
                    <EventListItem key={i}>
                      <ImageContainer>
                        <GatsbyImage
                          image={
                            event.events.eventImage.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={event.events.eventImage.altText}
                        />
                      </ImageContainer>
                      <TextContainer>
                        <Name>{event.title}</Name>
                        <Time>
                          <Time>{event.events.date}</Time> {"  "}|{"  "}
                          {event.events.startTime} -{" "}
                          <Time>{event.events.endTime} </Time>
                        </Time>
                        <Address>{event.events.address}</Address>
                        <Details
                          dangerouslySetInnerHTML={{
                            __html: event.events.eventDetails,
                          }}
                        />
                      </TextContainer>
                    </EventListItem>
                  )
                }
              }
            })}
          </EventListElement>
        </ListContainer>
      </Container>
      <Modal open={open} toggle={toggle} />
    </Section>
  )
}

export default EventList
