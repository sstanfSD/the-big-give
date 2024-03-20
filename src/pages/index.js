import React, { useState } from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Steps from "../components/Home/Steps"
import RegionalChampions from "../components/Home/RegionalChampions"
import FAQ from "../components/Common/FAQ"
import SocialMedia from "../components/Home/SocialMedia"
import BigStories from "../components/Home/BigStories"
import ThankYou from "../components/Home/ThankYou"

const Home = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const date = data.wpPage.homeheader.eventDate
  const FAQs = data.allWpFaq
  const champions = data.allWpRegionalChampion
  const thankyou = data.wpPage.thankyou

  return (
    <>
      <PageHead
        title={"The Big Give"}
        description={
          "Join a national movement of generosity on Saturday, June 3, 2023."
        }
      />
      <Layout>
        <Modal openModal={openModal} toggleModal={toggleModal} />
        <Header date={date} toggleModal={toggleModal} />
        <About />
        <Steps toggle={toggleModal} />
        <RegionalChampions champions={champions} />
        <FAQ FAQs={FAQs} />
        <BigStories />

        <ThankYou thankyou={thankyou} toggle={toggleModal} />
        <SocialMedia />
      </Layout>
    </>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
    wpPage(uri: { eq: "/" }) {
      id
      thankyou {
        images {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5)
            }
          }
        }
        storylinks {
          storySlug
          storyTitle
        }
      }
      homeheader {
        eventDate
      }
    }
    allWpFaq(sort: { order: ASC, fields: date }) {
      nodes {
        faq {
          question
          answer
        }
      }
    }
    allWpRegionalChampion {
      nodes {
        title
        regionalChampion {
          regionImage {
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.6)
              }
            }
            altText
          }
          champion {
            email
            fieldGroupName
            firstName
            lastName
          }
        }
      }
    }
  }
`
