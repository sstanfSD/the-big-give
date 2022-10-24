import React, { useState } from "react"

import PageHead from "../components/PageHead"
import Layout from "../components/Layout/index"
import AltHeader from "../components/Common/AltHeader"
import PlainText from "../components/Common/PlainText"

const StatementOfFaith = ({ data }) => {
  return (
    <>
      <PageHead
        title={"Statement of faith"}
        description={
          "The Big Give is organized by volunteers and groups from many different Christian traditions, but we’re inspired by a common profession of faith."
        }
      />
      <Layout>
        <AltHeader heading={"Statement of Faith"} />
        <PlainText>
          <p>
            The Big Give is organized by volunteers and groups from many
            different Christian traditions, but we’re inspired by a common
            profession of faith.
            <br />
            <br />
            <strong>The Apostles’ Creed</strong>
            <br />
            <br />
            I believe in God, the Father almighty,
            <br />
            creator of heaven and earth.
            <br />
            I believe in Jesus Christ, God’s only Son, our Lord,
            <br />
            who was conceived by the Holy Spirit,
            <br />
            born of the Virgin Mary,
            <br />
            suffered under Pontius Pilate,
            <br />
            was crucified, died, and was buried;
            <br />
            he descended to the dead.
            <br />
            On the third day he rose again;
            <br />
            he ascended into heaven,
            <br />
            he is seated at the right hand of the Father,
            <br />
            and he will come again to judge the living and the dead.
            <br />
            I believe in the Holy Spirit,
            <br />
            the holy catholic/universal church,
            <br />
            the communion of saints,
            <br />
            the forgiveness of sins,
            <br />
            the resurrection of the body,
            <br />
            and the life everlasting.
          </p>
        </PlainText>
      </Layout>
    </>
  )
}

export default StatementOfFaith
