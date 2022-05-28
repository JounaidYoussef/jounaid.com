import React from "react"

function Checkmark({ ...props }) {
  return (
    <svg
      width={123}
      height={123}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.556 67.179a3.207 3.207 0 0 1 4.303-4.756L52.3 74.61l31.543-33.036a3.213 3.213 0 1 1 4.656 4.428L54.793 81.305l-.004-.004a3.207 3.207 0 0 1-4.475.168l-15.758-14.29Z"
        fill="#000"
      />
    </svg>
  )
}

export default Checkmark
