import React from "react"
import { Helmet } from "react-helmet"

const index = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default index
