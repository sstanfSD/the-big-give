import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import PageHead from "../components/PageHead"
import Header from "../components/Story/Header"
import Main from "../components/Story/Main"
import CTA from "../components/Story/CTA"

const Story = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => {
    setOpenModal(!openModal)
  }
  const story = data.post

  console.log(data.post)

  return (
    <Layout>
      <Modal openModal={openModal} toggleModal={toggleModal} />
      <Header
        img={story.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
        alt={story.featuredImage.altText}
        title={story.title}
        year={story.stories.year}
        location={story.stories.location}
        excerpt={story.excerpt}
      />
      <Main
        content={story.content}
        images={story.stories.storyImages}
        video={story.stories.videoEmbedCode}
      />
      <CTA toggle={toggleModal} />
    </Layout>
  )
}

export default Story

export const storyQuery = graphql`
  query storyById($id: String!) {
    post: wpStory(id: { eq: $id }) {
      title
      id
      seo {
        metaDesc
        title
      }
      categories {
        nodes {
          name
        }
      }
      content
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      stories {
        location
        region
        year
        videoEmbedCode
        storyImages {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 400)
            }
          }
        }
      }
    }
  }
`
