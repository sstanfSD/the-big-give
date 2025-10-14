import React, { useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import PageHead from "../components/PageHead";
import Layout from "../components/Layout/index";
import Modal from "../components/Common/Modal";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Steps from "../components/Home/Steps";
import RegionalChampions from "../components/Home/RegionalChampions";
import FAQ from "../components/Common/FAQ";
import SocialMedia from "../components/Home/SocialMedia";
import BigStories from "../components/Home/BigStories";
import ThankYou from "../components/Home/ThankYou";

const Home = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const { t } = useTranslation();

  // Handle cases where WordPress data might not be available
  const date = data.wpPage?.homeheader?.eventDate || "May 3, 2025";
  const FAQs = data.allWpFaq || { nodes: [] };
  const champions = data.allWpRegionalChampion || { nodes: [] };
  const thankyou = data.wpPage?.thankyou || null;

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <PageHead
        title={"The Big Give"}
        description={`Join a national movement of generosity on ${capitalizeFirstLetterOfEachWord(
          date
        )}.`}
      />
      <Layout>
        <Modal openModal={openModal} toggleModal={toggleModal} />
        <Header date={date} toggleModal={toggleModal} />
        <About date={capitalizeFirstLetterOfEachWord(date)} />
        <Steps toggle={toggleModal} date={capitalizeFirstLetterOfEachWord(date)} />
        <RegionalChampions champions={champions} />
        <FAQ FAQs={FAQs} />
        <BigStories />
        {thankyou && <ThankYou thankyou={thankyou} toggle={toggleModal} />}
        <SocialMedia />
      </Layout>
    </>
  );
};

export default Home;

// IMPORTANT: add $language and the locales query so i18n JSON is loaded
export const query = graphql`
  query HomeQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
`;
