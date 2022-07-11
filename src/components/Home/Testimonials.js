import "./index.scss"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from "swiper"
import Arrow from "../../assets/Arrow"
import { StaticImage } from "gatsby-plugin-image"
import Quote from "../../assets/Quote"

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
            <div className="col testimonial-card-container">
              <div className="col ta">
                <Quote />
                <text style={{ fontSize: 13, fontWeight: "400" }}>
                  Youssef is the right person for the job . Tireless work ethic
                  , he is not just willing to do whatever it takes to create a
                  product that will translate the customer's vision into reality
                  but also explaining how it works for better understanding in
                  the client side. Quality , performance and efficiency are the
                  results of working with him , actually an inspiring person and
                  I'm looking forward to working with him again!
                </text>
              </div>
              <div className="col icenter testimonial-avatar-container">
                <div
                  style={{
                    borderRadius: "100%",
                    width: 48,
                    height: 48,
                    margin: "0.4em 0 0.4em 0",
                  }}
                >
                  <StaticImage
                    src="../../assets/pictures/adnane.webp"
                    alt="Personal Picture"
                    style={{ borderRadius: "100%", width: 48, height: 48 }}
                  />
                </div>

                <div className="col ta">
                  <text style={{ fontSize: 12, fontWeight: "600" }}>
                    Mohamed Adnane Abouchadi
                  </text>
                  <text style={{ fontSize: 10, fontWeight: "400" }}>
                    CTO at Skwiq
                  </text>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col testimonial-card-container">
              <div className="col ta">
                <Quote />
                <text style={{ fontSize: 13, fontWeight: "400" }}>
                  I really enjoyed working with Youssef, both for his ability to
                  quickly understand the subjects that were asked of him, but
                  also for his sympathy and good humor on a daily basis. In just
                  3 months, Youssef was able to develop a web portal to display
                  the compatibility between OS and software products, as part of
                  his internship. In addition, Youssef regularly monitors
                  technology in order to be aware of the latest news and trends
                  in the web development market (Angular, Javascript) as well as
                  CI/CD (GitLab). Thank you Youssef! :D
                </text>
              </div>
              <div className="col icenter testimonial-avatar-container">
                <div
                  style={{
                    borderRadius: "100%",
                    width: 48,
                    height: 48,
                    margin: "0.4em 0 0.4em 0",
                  }}
                >
                  <StaticImage
                    src="../../assets/pictures/alexandre.webp"
                    alt="Personal Picture"
                    style={{ borderRadius: "100%", width: 48, height: 48 }}
                  />
                </div>

                <div className="col ta">
                  <text style={{ fontSize: 12, fontWeight: "600" }}>
                    Alexandre Deplaix
                  </text>
                  <text style={{ fontSize: 10, fontWeight: "400" }}>
                    Responsable forfait de services Qualifications Systèmes chez
                    Orange
                  </text>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="col testimonial-card-container">
              <div className="col ta">
                <Quote />
                <text style={{ fontSize: 13, fontWeight: "400" }}>
                  Youssef is the right person for the job . Tireless work ethic
                  , he is not just willing to do whatever it takes to create a
                  product that will translate the customer's vision into reality
                  but also explaining how it works for better understanding in
                  the client side . Quality , performance and efficient are the
                  result of working with him , actually an inspiring person
                  Looking forward to working with him again!
                </text>
              </div>
              <div className="col icenter testimonial-avatar-container">
                <div
                  style={{
                    borderRadius: "100%",
                    width: 48,
                    height: 48,
                    margin: "0.4em 0 0.4em 0",
                  }}
                >
                  <StaticImage
                    src="../../assets/pictures/adnane.webp"
                    alt="Personal Picture"
                    style={{ borderRadius: "100%", width: 48, height: 48 }}
                  />
                </div>

                <div className="col ta">
                  <text style={{ fontSize: 12, fontWeight: "600" }}>
                    Mohamed Adnane Abouchadi
                  </text>
                  <text style={{ fontSize: 10, fontWeight: "400" }}>
                    CTO at Skwiq
                  </text>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
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
