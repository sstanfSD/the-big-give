import React from "react"

import {
  Section,
  Container,
  TimelineContainer,
  TextContainer,
  Heading,
  Body,
} from "./HistoryElements"

import Timeline from "./Timeline"

const History = () => {
  return (
    <Section>
      <Container>
        <TimelineContainer>
          <Timeline />
        </TimelineContainer>
        <TextContainer>
          <Heading>History of the Big Give</Heading>
          <Body>
            <p>
              The idea of a city-wide “Big Give” dates back to 2009. A local
              church in Ottawa had just completed The 40 Days of Community by
              Rick Warren. The challenge at the end of the book study was to
              find a church-wide project that would reach the community in a
              unique way.
            </p>
            <p>
              Kathy Blakely woke up early one morning with the idea of a free
              garage sale. It was something that was easy to do and wouldn’t
              cost the church a lot of money. As she shared her vision with
              others, it became evident that this was a “God idea.” The first
              Big Give was held that year, and Kathy had a dream to see churches
              all over the city do the same thing on the same day.
            </p>
            <p>
              In 2014, Richard Long of Love Ottawa heard of the idea and
              approached Kathy about partnering together. A committee was
              formed, and in June of 2015, 55 churches across the nation’s
              capital joined together for a unified day of radical giving.{" "}
            </p>
            <p>
              Through the ongoing partnership with Love Ottawa and One Way
              Ministries, the team hopes the event will continue to grow and be
              an incredible blessing to communities in Ottawa and across the
              country.
            </p>
          </Body>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default History
