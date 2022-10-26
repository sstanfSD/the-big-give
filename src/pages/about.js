import React, { useState } from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import Header from "../components/Common/Header"
import AboutRegional from "../components/About/AboutRegional"
import History from "../components/About/History"
import Team from "../components/About/Team"
import FAQ from "../components/Common/FAQ"
import Contact from "../components/About/Contact"

const About = ({ data }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const SEO = data.wpPage.seo
  const header = data.wpPage.common_header
  const team = data.allWpTeamMembers
  const FAQs = data.allWpFaq

  return (
    <>
      <PageHead title={SEO.title} description={SEO.metaDesc} />
      <Layout toggle={toggle}>
        <Modal open={open} toggle={toggle} />
        <Header header={header} toggle={toggle} />
        <AboutRegional />
        <History />
        <Team team={team} />
        <FAQ FAQs={FAQs} />
        <Contact />
      </Layout>
    </>
  )
}

export default About

export const query = graphql`
  query FaqQuery {
    wpPage(uri: { eq: "/about/" }) {
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
    allWpFaq(sort: { order: ASC, fields: date }) {
      nodes {
        faq {
          question
          answer
        }
      }
    }
    allWpTeamMembers {
      nodes {
        teamMembers {
          bio
          name
          role
          director
          profileImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
