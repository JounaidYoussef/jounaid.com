import React from "react"

function Unsplash({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 512 512"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <circle cx={256} cy={256} r={256} data-original="#000000" />
        <path
          d="M405.819 238.728v167.067H106.181V238.728h94.391v83.533h110.856v-83.533zm-94.391-132.522H200.572v83.533h110.856z"
          fill="#fff"
          data-original="#ffffff"
        />
      </g>
    </svg>
  )
}

export default Unsplash
