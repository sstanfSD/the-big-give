import React from "react"
import { graphql } from "gatsby"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import About from "../components/Home/About"
import Steps from "../components/Home/Steps"
import RegionalChampions from "../components/Home/RegionalChampions"
import FAQ from "../components/Common/FAQ"

const index = ({ data }) => {
  const FAQs = data.allWpFaq
  const champions = data.allWpRegionalChampion
  return (
    <>
      <PageHead title={"The Big Give"} description={"Lorem Ipsum"} />
      <Layout>
        <About />
        <Steps />
        <RegionalChampions champions={champions} />
        <FAQ FAQs={FAQs} />
      </Layout>
    </>
  )
}

export default index

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
