import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default ({ images }) => {
  console.log(images)
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 4000 }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <GatsbyImage
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={image.altText}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
