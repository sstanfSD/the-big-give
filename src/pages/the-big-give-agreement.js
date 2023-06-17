import React, { useState } from "react"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import Modal from "../components/Common/Modal"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"

const StatementOfFaith = ({ data }) => {
  return (
    <>
      <PageHead
        title={"The Big Give Agreement"}
        description={
          "The Big Give is organized by volunteers and groups from many different Christian traditions, but we’re inspired by a common profession of faith."
        }
      />
      <Layout>
        <AltHeader heading={"The Big Give Agreement"} />
        <PlainText>
          <h2>Church Agreement</h2>
          <ul>
            <li>
              <h3>
                1. Host your Big Give event on the first Saturday of June each
                year
              </h3>
              <p>
                In order for your church/ministry to partner with The Big Give
                and be listed on our website you must host your Big Give event
                on the first Saturday of June. This joint initiative creates
                awareness and engagement on a national scale. It also generates
                a sense of real community between all our partnering churches.
              </p>
            </li>
            <li>
              <h3>2. All goods and services are FREE</h3>
              <p>
                The Big Give’s mission is to share the unconditional love of God
                through radical generosity with no strings attached and asking
                nothing in return (no donations, sign-up sheets, promotions
                etc.) While your church is likely involved with many great
                causes, we ask that you keep the integrity and purity of The Big
                Give in tact. This means no fundraising, ministry/charitable
                organization promotion, human resource recruitment or sale of
                any items.
              </p>
            </li>
            <li>
              <h3>3. Pure Motives</h3>
              <p>
                The Big Give’s purpose is to draw our guests attention to God’s
                love for them. Our events are not environments for preaching,
                teaching or judging. If our guests have faith questions we
                encourage our volunteers to respond based on biblical principles
                and only obtain contact information if offered by the guest. We
                also encourage our participating churches to have a designated
                prayer area and tables offering free Bibles. Our Big Give events
                are first and foremost environments for showing God’s love
                through practical and tangible acts of kindness and generosity.
              </p>
            </li>
            <li>
              <h3>4. You take the proper legal precautions</h3>
              <p>
                Your partnership with The Big Give means that any
                indemnification that your insurance company may require will be
                your responsibility. The Big Give, Love Ottawa, One Way
                Ministries or any third parties mentioned on The Big Give
                website are not liable for any damages including but not limited
                to accidental, consequential damages or personal injury
                resulting from any activities associated with The Big Give.
              </p>
            </li>
            <li>
              <h3>5. Everyone’s privacy and dignity is respected</h3>
              <p>
                While we encourage you to take pictures and video of your Big
                Give event, we ask that you obtain permission of anyone
                appearing in media you plan to use in a public or social media
                forum.
              </p>
            </li>
            <li>
              <h3>6. Registration Fee</h3>
              <p>
                As with any ministry, The Big Give cannot exist without some
                funding. Registration is our only method of being able to pay
                for our expenses which include communication updates to the
                website, event banners, promo videos, resource updates, French
                translation, travel and promotional material. We also pay a
                small administration fee to One Way Ministries who host our
                registration site, make website improvements and provide human
                resources to handle important communication with our church
                partners. In addition, a small number of churches cannot afford
                the registration fee so we try to facilitate their partnership.
                Simply stated – without your registration fee The Big Give would
                not exist.
              </p>
            </li>
          </ul>
        </PlainText>
      </Layout>
    </>
  )
}

export default StatementOfFaith
