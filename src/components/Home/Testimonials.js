import "./index.scss"
import React from "react"
import TestimonialCard from "../Cards/TestimonialCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import Arrow from "../../assets/arrow.svg"

import { Navigation, Pagination, Autoplay } from "swiper"

const Testimonials = () => {
  return (
    <>
      <div className="jcenter">
        <h2>Testimonials</h2>
      </div>

      <Swiper
        loop={true}
        initialSlide={1}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </div>
        <button className="swiper-button-next">
          <Arrow fill="#B4C4D1" />
        </button>
        <button className="swiper-button-prev">
          <Arrow fill="#B4C4D1" />
        </button>
      </Swiper>
    </>
  )
}

export default Testimonials
