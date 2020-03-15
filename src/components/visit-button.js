import React from "react"

const VisitButton = props => (
  <a
    className="small-button"
    href={props.to}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M488.73,0H302.55a23.28,23.28,0,1,0,0,46.55h130L193,286.09A23.27,23.27,0,1,0,225.91,319L465.45,79.46v130a23.28,23.28,0,1,0,46.55,0V23.27A23.27,23.27,0,0,0,488.73,0Z"
      />
      <path
        fill="#ffffff"
        d="M395.64,232.73A23.27,23.27,0,0,0,372.36,256V465.46H46.54V139.64H256a23.28,23.28,0,0,0,0-46.55H23.27A23.27,23.27,0,0,0,0,116.36V488.73A23.27,23.27,0,0,0,23.27,512H395.64a23.27,23.27,0,0,0,23.27-23.27V256A23.27,23.27,0,0,0,395.64,232.73Z"
      />
    </svg>
    {props.children}
  </a>
)

export default VisitButton
