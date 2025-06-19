import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { BtnPrimaryExternal, BtnPrimary } from "../../Buttons"

import {
  Section,
  Container,
  Sidebar,
  ContentContainer,
  Heading,
  Body,
  BtnList,
  BtnListItem,
  BtnWhite,
  RegisterBtn,
  ListContainer,
  ListHeading,
  StoryListElement,
  StoryListItem,
  Card,
  ImageContainer,
  TextContainer,
  Title,
  Location,
  Excerpt,
} from "./StoriesElements"

const Stories = ({ stories, toggle }) => {
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

  useEffect(() => {}, [])

  return (
    <Section id="stories">
      <Container>
        <Sidebar>
          <ContentContainer>
            <Heading>Stories by region</Heading>

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
                          navigate("/big-stories#stories")
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
                          navigate("/big-stories#stories")
                        }}
                      >
                        {option}
                      </BtnWhite>
                    </BtnListItem>
                  )
              })}
              <BtnListItem>
                {/* <BtnPrimaryExternal
                  text="register your church"
                  to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
                  large
                /> */}
                <BtnPrimary text="register your church" toggle={toggle} large />
              </BtnListItem>
            </BtnList>
          </ContentContainer>
        </Sidebar>
        <ListContainer>
          <ListHeading>{selected}</ListHeading>
          <StoryListElement>
            {stories.nodes.map((story, i) => {
              if (selected === options[0]) {
                if (story.stories.region === options[0]) {
                  return (
                    <StoryListItem key={i}>
                      {story.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData &&
                        story.excerpt && (
                          <Link to={`/stories/${story.slug}`}>
                            <div className="story-wrapper">
                              <Card>
                                <ImageContainer>
                                  <GatsbyImage
                                    image={
                                      story.featuredImage.node.localFile
                                        .childImageSharp.gatsbyImageData
                                    }
                                    alt={story.featuredImage.node.altText}
                                  />
                                </ImageContainer>
                                <TextContainer>
                                  <Title>{story.title}</Title>
                                  <Location>{story.stories.location}</Location>
                                  <Excerpt
                                    dangerouslySetInnerHTML={{
                                      __html: story.excerpt,
                                    }}
                                  />
                                </TextContainer>
                              </Card>
                            </div>
                          </Link>
                        )}
                    </StoryListItem>
                  )
                }
              }

              if (selected === options[1]) {
                if (story.stories.region === options[1]) {
                  return (
                    <StoryListItem key={i}>
                      {story.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData &&
                        story.excerpt && (
                          <Link to={`/stories/${story.slug}`}>
                            <div className="story-wrapper">
                              <Card>
                                <ImageContainer>
                                  <GatsbyImage
                                    image={
                                      story.featuredImage.node.localFile
                                        .childImageSharp.gatsbyImageData
                                    }
                                    alt={story.featuredImage.node.altText}
                                  />
                                </ImageContainer>
                                <TextContainer>
                                  <Title>{story.title}</Title>
                                  <Location>{story.stories.location}</Location>
                                  <Excerpt
                                    dangerouslySetInnerHTML={{
                                      __html: story.excerpt,
                                    }}
                                  />
                                </TextContainer>
                              </Card>
                            </div>
                          </Link>
                        )}
                    </StoryListItem>
                  )
                }
              }

              if (selected === options[2]) {
                if (story.stories.region === options[2]) {
                  return (
                    <StoryListItem key={i}>
                      {story.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData &&
                        story.excerpt && (
                          <Link to={`/stories/${story.slug}`}>
                            <div className="story-wrapper">
                              <Card>
                                <ImageContainer>
                                  <GatsbyImage
                                    image={
                                      story.featuredImage.node.localFile
                                        .childImageSharp.gatsbyImageData
                                    }
                                    alt={story.featuredImage.node.altText}
                                  />
                                </ImageContainer>
                                <TextContainer>
                                  <Title>{story.title}</Title>
                                  <Location>{story.stories.location}</Location>
                                  <Excerpt
                                    dangerouslySetInnerHTML={{
                                      __html: story.excerpt,
                                    }}
                                  />
                                </TextContainer>
                              </Card>
                            </div>
                          </Link>
                        )}
                    </StoryListItem>
                  )
                }
              }

              if (selected === options[3]) {
                if (story.stories.region === "Other") {
                  return (
                    <StoryListItem key={i}>
                      {story.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData &&
                        story.excerpt && (
                          <Link to={`/stories/${story.slug}`}>
                            <div className="story-wrapper">
                              <Card>
                                <ImageContainer>
                                  <GatsbyImage
                                    image={
                                      story.featuredImage.node.localFile
                                        .childImageSharp.gatsbyImageData
                                    }
                                    alt={story.featuredImage.node.altText}
                                  />
                                </ImageContainer>
                                <TextContainer>
                                  <Title>{story.title}</Title>
                                  <Location>{story.stories.location}</Location>
                                  <Excerpt
                                    dangerouslySetInnerHTML={{
                                      __html: story.excerpt,
                                    }}
                                  />
                                </TextContainer>
                              </Card>
                            </div>
                          </Link>
                        )}
                    </StoryListItem>
                  )
                }
              }
            })}
          </StoryListElement>
        </ListContainer>
      </Container>
    </Section>
  )
}

export default Stories
