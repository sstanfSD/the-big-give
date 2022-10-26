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

const Home = ({ data }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const FAQs = data.allWpFaq
  const champions = data.allWpRegionalChampion
  return (
    <>
      <PageHead title={"The Big Give"} description={"Lorem Ipsum"} />
      <Layout toggle={toggle}>
        <Modal open={open} toggle={toggle} />
        <Header />
        <About />
        <Steps toggle={toggle} />
        <RegionalChampions champions={champions} />
        <FAQ FAQs={FAQs} />
        <SocialMedia />
      </Layout>
    </>
  )
}

export default Home

export const query = graphql`
  query FaqQuery {
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
