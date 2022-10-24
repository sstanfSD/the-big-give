import React, { useState } from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import Header from "../components/Common/Header"
import Stories from "../components/BigStories/Stories"
import Videos from "../components/BigStories/Videos"

const BigStories = ({ data }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const SEO = data.wpPage.seo
  const header = data.wpPage.common_header
  const stories = data.allWpStory
  const videos = data.allWpVideoTestimonial

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout>
        <Modal toggle={toggle} open={open} />
        <Header header={header} toggle={toggle} />
        <Stories stories={stories} toggle={toggle} />
        <Videos videos={videos} />
      </Layout>
    </>
  )
}

export default BigStories

export const query = graphql`
  query StoriesQuery {
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
        redButtonLink
        redButtonText
      }
    }
    allWpStory {
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
                gatsbyImageData(aspectRatio: 1.5)
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
    allWpVideoTestimonial {
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
