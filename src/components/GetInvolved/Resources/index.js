import React, { useState } from "react"

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
  ListContainer,
  EnglishResourceList,
  FrenchResourceList,
  ResourceListItem,
  Type,
  LinkContainer,
  Icon,
  Link,
} from "./ResourcesElements"

import Dropdown from "./Dropdown"

import downloadIcon from "../../../assets/icons/download.svg"

const Resources = ({ resources, englishKit, frenchKit }) => {
  //DROPDOWN LOGIC

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const options = ["All Resources", "English Resources", "French Resources"]

  const [selected, setSelected] = useState(options[0])

  return (
    <Section id="resources">
      <Container>
        <Sidebar>
          <ContentContainer>
            <Heading>Registration Resources</Heading>
            <Body>
              Logo files, flyers, PowerPoint slides, promotional videos, prayer
              letters… download all the resources you need to run a successful
              Big Give event at your church.
            </Body>
            <BtnList>
              <BtnListItem>
                <BtnWhite
                  large
                  target={"_blank"}
                  href={englishKit.registrationResource.file.mediaItemUrl}
                >
                  download English press kit
                </BtnWhite>
              </BtnListItem>
              <BtnListItem>
                <BtnWhite
                  target={"_blank"}
                  large
                  href={frenchKit.registrationResource.file.mediaItemUrl}
                >
                  download French press kit
                </BtnWhite>
              </BtnListItem>
            </BtnList>
          </ContentContainer>
        </Sidebar>
        <ListContainer>
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />

          {selected === "All Resources" && (
            <>
              <EnglishResourceList>
                {resources.nodes.map((resource, i) => {
                  if (resource.tags.nodes.length === 0) {
                    if (resource.categories.nodes[0].name === "English") {
                      return (
                        <ResourceListItem key={i}>
                          <Type>{resource.resourceTypes.nodes[0].name}</Type>
                          {resource.registrationResource.file && (
                            <LinkContainer>
                              <Icon>
                                <img src={downloadIcon} alt="download" />
                              </Icon>
                              <Link
                                target="_blank"
                                href={
                                  resource.registrationResource.file
                                    .mediaItemUrl
                                }
                              >
                                {resource.title}
                              </Link>
                            </LinkContainer>
                          )}
                          {resource.registrationResource.link && (
                            <a
                              target="_blank"
                              href={resource.registrationResource.link.url}
                            >
                              {resource.registrationResource.link.title}
                            </a>
                          )}
                        </ResourceListItem>
                      )
                    }
                  }
                })}
              </EnglishResourceList>
              <FrenchResourceList>
                {resources.nodes.map((resource, i) => {
                  if (resource.tags.nodes.length === 0) {
                    if (resource.categories.nodes[0].name === "French") {
                      return (
                        <ResourceListItem key={i}>
                          <Type>{resource.resourceTypes.nodes[0].name}</Type>
                          {resource.registrationResource.file && (
                            <LinkContainer>
                              <Icon>
                                <img src={downloadIcon} alt="download" />
                              </Icon>
                              <Link
                                target="_blank"
                                href={
                                  resource.registrationResource.file
                                    .mediaItemUrl
                                }
                              >
                                {resource.title}
                              </Link>
                            </LinkContainer>
                          )}
                          {resource.registrationResource.link && (
                            <Link
                              target="_blank"
                              href={resource.registrationResource.link.url}
                            >
                              {resource.title}
                            </Link>
                          )}
                        </ResourceListItem>
                      )
                    }
                  }
                })}
              </FrenchResourceList>
            </>
          )}

          {selected === "English Resources" && (
            <EnglishResourceList>
              {resources.nodes.map((resource, i) => {
                if (resource.tags.nodes.length === 0) {
                  if (resource.categories.nodes[0].name === "English") {
                    return (
                      <ResourceListItem key={i}>
                        <Type>{resource.resourceTypes.nodes[0].name}</Type>
                        {resource.registrationResource.file && (
                          <LinkContainer>
                            <Icon>
                              <img src={downloadIcon} alt="download" />
                            </Icon>
                            <Link
                              target="_blank"
                              href={
                                resource.registrationResource.file.mediaItemUrl
                              }
                            >
                              {resource.title}
                            </Link>
                          </LinkContainer>
                        )}
                        {resource.registrationResource.link && (
                          <Link
                            target="_blank"
                            href={resource.registrationResource.link.url}
                          >
                            {resource.title}
                          </Link>
                        )}
                      </ResourceListItem>
                    )
                  }
                }
              })}
            </EnglishResourceList>
          )}

          {selected === "French Resources" && (
            <FrenchResourceList>
              {resources.nodes.map((resource, i) => {
                if (resource.tags.nodes.length === 0) {
                  if (resource.categories.nodes[0].name === "French") {
                    return (
                      <ResourceListItem key={i}>
                        <Type>{resource.resourceTypes.nodes[0].name}</Type>
                        {resource.registrationResource.file && (
                          <LinkContainer>
                            <Icon>
                              <img src={downloadIcon} alt="download" />
                            </Icon>
                            <Link
                              target="_blank"
                              href={
                                resource.registrationResource.file.mediaItemUrl
                              }
                            >
                              {resource.title}
                            </Link>
                          </LinkContainer>
                        )}
                        {resource.registrationResource.link && (
                          <Link
                            target="_blank"
                            href={resource.registrationResource.link.url}
                          >
                            {resource.title}
                          </Link>
                        )}
                      </ResourceListItem>
                    )
                  }
                }
              })}
            </FrenchResourceList>
          )}
        </ListContainer>
      </Container>
    </Section>
  )
}

export default Resources
