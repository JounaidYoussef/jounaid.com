import "./index.scss"
import React from "react"
import TestimonialCard from "../Cards/TestimonialCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { EffectCoverflow, Pagination } from "swiper"

export default () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </>
    // <div className="testimonials-container">
    //   <h2>Testimonials</h2>
    //   <TestimonialCard />
    // </div>
  )
}
