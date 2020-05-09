import React from "react"
import "../components/styles/socialLinks.css"

export default function socialLinks() {
  return (
    <div>
      <div className="social-cont">

        <div className="circle-cont">
          <a href="https://www.github.com/Aehlius/">
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111425.svg"
              alt=""
              width="30"
            />
          </a>
        </div>

        <div className="circle-cont">
          <a href="https://www.linkedin.com/in/iskenderakhmedov/">
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111499.svg"
              alt=""
              width="30"
            />
          </a>
        </div>
        

        <div className="circle-cont">
          <a href="mailto:ia913@nyu.edu">
            <img
              src="https://image.flaticon.com/icons/svg/281/281769.svg"
              alt=""
              width="30"
            />
          </a>
        </div>

      </div>
    </div>
  )
}
