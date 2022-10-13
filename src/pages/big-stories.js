import React from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Header from "../components/Common/Header"
import Stories from "../components/BigStories/Stories"

const index = ({ data }) => {
  const SEO = data.wpPage.seo
  const header = data.wpPage.common_header
  const stories = data.allWpStory

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout>
        <Header header={header} />
        <Stories stories={stories} />
      </Layout>
    </>
  )
}

export default index

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
  }
`
