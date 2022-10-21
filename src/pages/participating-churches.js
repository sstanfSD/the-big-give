import React, { useState } from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Modal from "../components/Common/Modal"
import Layout from "../components/Layout/index"
import Header from "../components/Common/Header"
import ChurchList from "../components/ParticipatingChurches/ChurchList"

const ParticipatingChurches = ({ data }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const SEO = data.wpPage.seo
  const header = data.wpPage.common_header
  const churches = data.allWpParticipatingChurch

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout toggle={toggle}>
        <Modal toggle={toggle} open={open} />
        <Header header={header} toggle={toggle} />
        <ChurchList churches={churches} toggle={toggle} />
      </Layout>
    </>
  )
}

export default ParticipatingChurches

export const query = graphql`
  query ChurchesQuery {
    wpPage(uri: { eq: "/participating-churches/" }) {
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
    allWpParticipatingChurch(sort: { fields: title, order: ASC }) {
      nodes {
        title
        participatingChurch {
          churchAddress
          churchName
          eventDetails
          eventTime
          region
          year
        }
      }
    }
  }
`
