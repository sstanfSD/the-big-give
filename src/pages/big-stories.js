import React, { useState } from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import Header from "../components/Common/Header"
import Stories from "../components/BigStories/Stories"
import Videos from "../components/BigStories/Videos"

const BigStories = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const { t } = useTranslation()
  
  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const SEO = data.wpPage?.seo || {}
  const header = data.wpPage?.common_header || {}
  const stories = data.allWpStory || { nodes: [] }
  const videos = data.allWpVideoTestimonial || { nodes: [] }

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout>
        <Modal openModal={openModal} toggleModal={toggleModal} />
        <Header header={header} toggle={toggleModal} />
        <Stories stories={stories} toggle={toggleModal} />
        <Videos videos={videos} />
      </Layout>
    </>
  )
}

export default BigStories

export const query = graphql`
  query StoriesQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    wpPage(uri: { eq: "/big-stories/" }) {
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
    }
    allWpStory(sort: { date: DESC }) {
      nodes {
        categories {
          nodes {
            name
          }
        }
        title
        excerpt
        slug
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.5)
              }
            }
          }
        }
        stories {
          location
          region
        }
      }
    }
    allWpVideoTestimonial(sort: { date: DESC }) {
      nodes {
        title
        video {
          videoEmbedCode
          videoThumbnail {
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