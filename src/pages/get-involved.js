import React, { useState } from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import Header from "../components/Common/Header"
import Resources from "../components/GetInvolved/Resources"
import Events from "../components/GetInvolved/Events"

const GetInvolved = ({ data }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const SEO = data.wpPage.seo
  const header = data.wpPage.common_header

  const resources = data.allWpRegistrationResource
  const englishKit = data.englishKit
  const frenchKit = data.frenchKit

  const events = data.allWpEvent

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout toggle={toggle}>
        <Modal toggle={toggle} open={open} />
        <Header header={header} toggle={toggle} />
        <Resources
          resources={resources}
          englishKit={englishKit}
          frenchKit={frenchKit}
        />
        <Events events={events} />
      </Layout>
    </>
  )
}

export default GetInvolved

export const query = graphql`
  query ResourcesQuery {
    wpPage(uri: { eq: "/get-involved/" }) {
      id
      seo {
        metaDesc
        title
      }
      common_header {
        blueButton
        blueButtonLink
        blueButtonText
        body
        heading
        images {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5)
            }
          }
        }
        redButton
        redButtonLink
        redButtonText
      }
    }
    allWpRegistrationResource {
      nodes {
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        registrationResource {
          file {
            mediaItemUrl
          }
          link {
            url
          }
        }
        resourceTypes {
          nodes {
            name
          }
        }
        title
      }
    }
    englishKit: wpRegistrationResource(
      tags: { nodes: { elemMatch: { name: { eq: "kit" } } } }
      categories: { nodes: { elemMatch: { name: { eq: "English" } } } }
    ) {
      registrationResource {
        file {
          mediaItemUrl
        }
      }
    }
    frenchKit: wpRegistrationResource(
      tags: { nodes: { elemMatch: { name: { eq: "kit" } } } }
      categories: { nodes: { elemMatch: { name: { eq: "French" } } } }
    ) {
      registrationResource {
        file {
          mediaItemUrl
        }
      }
    }
    allWpEvent {
      nodes {
        title
        events {
          region
          address
          date
          eventDetails
          endTime
          startTime
          eventImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
              }
            }
          }
        }
      }
    }
  }
`
