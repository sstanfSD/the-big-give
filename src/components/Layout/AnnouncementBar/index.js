import React from "react"
import { Bar, RegisterLink } from "./AnnouncementBarElements"

const AnnouncementBar = () => {
  return (
    <Bar>
      Register today for an Information/Inspiration event on February 19th.
      10:00 am – 11:30 am held at St. Paul's Presbyterian Church. Email Janice
      to{" "}
      <RegisterLink href="mailto:janice@onewayministries.ca">
        register (janice@onewayministries.ca)
      </RegisterLink>
    </Bar>
  )
}

export default AnnouncementBar
