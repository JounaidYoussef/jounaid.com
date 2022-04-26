import "./index.scss"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Quote from "../../assets/quote.svg"

const TestimonialCard = () => {
  return (
    <div className="testimonialCard-container">
      <div className="col">
        <Quote />
        <text style={{ fontSize: 14, fontWeight: "400" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          fermentum orci. Suspendisse consequat tincidunt eleifend. Sed ac
          lectus facilisis felis venenatis efficitur vel feugiat turpis. Donec
          eget dui sit amet lectus vulputate viverra. Mauris sem quam, fringilla
          quis semper et, tincidunt sit amet erat. Mauris gravida mauris at
          lectus hendrerit blandit. Ut eu ornare risus.
        </text>
      </div>
      <div style={{ width: "40%" }}>
        <StaticImage
          src="../../assets/aa.jpg"
          alt="Personal Picture"
          placeholder="blurred"
          width={160}
          height={160}
        />
      </div>
    </div>
  )
}

export default TestimonialCard
