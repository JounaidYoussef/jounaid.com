import "./index.scss"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Quote from "../../assets/quote.svg"

const TestimonialCard = () => {
  return (
    <div className="col testimonial-card-container">
      <div className="col ta">
        <Quote />
        <text style={{ fontSize: 13, fontWeight: "400" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          fermentum orci. Suspendisse consequat tincidunt eleifend. Sed ac
          lectus facilisis felis venenatis efficitur vel feugiat turpis. Donec
          eget dui sit amet lectus vulputate viverra. Mauris sem quam, fringilla
          quis semper et, tincidunt sit amet erat. Mauris gravida mauris at
          lectus hendrerit blandit. Ut eu ornare risus.
        </text>
      </div>
      <div className="col icenter testimonial-avatar-container">
        <StaticImage
          src="../../assets/aa.jpg"
          alt="Personal Picture"
          placeholder="blurred"
          width={48}
          height={48}
          imgStyle={{ borderRadius: "100%" }}
          style={{ margin: "0.4em" }}
        />
        <div className="col ta">
          <text style={{ fontSize: 12, fontWeight: "600" }}>
            Youssef Jounaid
          </text>
          <text style={{ fontSize: 10, fontWeight: "400" }}>
            {" "}
            Développeur Web FullSTack
          </text>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
