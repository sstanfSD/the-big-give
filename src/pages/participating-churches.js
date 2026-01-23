import React, { useState } from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import PageHead from "../components/PageHead"
import Modal from "../components/Common/Modal"
import Layout from "../components/Layout/index"
import Header from "../components/Common/Header"
import MapSection from "../components/ParticipatingChurches/MapSection"
import ChurchList from "../components/ParticipatingChurches/ChurchList"

const ParticipatingChurches = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const { t } = useTranslation()

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const SEO = data.wpPage?.seo || {}
  const header = data.wpPage?.common_header || {}
  const churches = data.allWpParticipatingChurch || { nodes: [] }
  const markers = data.wpPage?.mapMarkers || {}

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout>
        <Modal openModal={openModal} toggleModal={toggleModal} />
        {/* <Header header={header} toggle={toggleModal} /> */}
        <ChurchList churches={churches} toggle={toggleModal} />
        <MapSection markers={markers} />
      </Layout>
    </>
  )
}

export default ParticipatingChurches

export const query = graphql`
  query ChurchesQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
        redButtonText
      }
      mapMarkers {
        marker {
          churchAddress
          churchName
          churchLink {
            url
          }
          fieldGroupName
          latitude
          longitude
        }
      }
    }
    allWpParticipatingChurch(sort: { title: ASC }) {
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
