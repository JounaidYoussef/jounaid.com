import "./index.scss"
import React from "react"
import TestimonialCard from "../Cards/TestimonialCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { Navigation, Pagination, Autoplay } from "swiper"
import Arrow from "../../assets/Arrow"

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
            <TestimonialCard
              image="../assets/adnane.jpg"
              content="Youssef is the right freelancer for the job .
Tireless work ethic , he is not just willing to do  whatever it takes to create a product that will translate the customer's vision into reality but also explaining how it works for better understanding in the client side .
Quality , performance and efficient are the result of working with him   , actually an inspiring person

Looking forward to working with him again!"
              fullname="Mohamed Adnane Abouchadi"
              title="CTO at Skwiq"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image="../../assets/adnane.jpg"
              content="Youssef is the right freelancer for the job .
Tireless work ethic , he is not just willing to do  whatever it takes to create a product that will translate the customer's vision into reality but also explaining how it works for better understanding in the client side .
Quality , performance and efficient are the result of working with him   , actually an inspiring person

Looking forward to working with him again!"
              fullname="Mohamed Adnane Abouchadi"
              title="CTO at Skwiq"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image="../../assets/adnane.jpg"
              content="Youssef is the right freelancer for the job .
Tireless work ethic , he is not just willing to do  whatever it takes to create a product that will translate the customer's vision into reality but also explaining how it works for better understanding in the client side .
Quality , performance and efficient are the result of working with him   , actually an inspiring person

Looking forward to working with him again!"
              fullname="Mohamed Adnane Abouchadi"
              title="CTO at Skwiq"
            />
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
