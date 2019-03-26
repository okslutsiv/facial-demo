import React from "react"
import PropTypes from "prop-types"
import { barby } from "../MuiWrappers/facialColors"

function LogoSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "50px"}
      height={props.height || "50px"}
      stroke={props.stroke || barby[500]}
      fill={props.stroke || barby[500]}
      className={props.className}
      viewBox="0 0 512 512"
    >
      <path
        d="M330.88,352l79.168,56.544c8.119,5.797,17.847,8.913,27.824,8.912c3.433,0.001,6.857-0.375,10.208-1.12
				c25.794-5.643,42.129-31.128,36.485-56.921c-2.598-11.873-9.619-22.31-19.637-29.191L356.976,256H185.888l16-32H320v-32H182.112
				l-25.776,51.552L109.728,190.4c34.464-7.85,56.038-42.151,48.189-76.615C151.323,84.838,125.688,64.225,96,64H48
				C21.49,64,0,85.49,0,112v102.016L120.736,352H208v64h-32c-44.161,0.053-79.947,35.839-80,80v16h320v-16
				c-0.053-44.161-35.839-79.947-80-80h-32v-64H330.88z M96,96c17.673,0,32,14.327,32,32s-14.327,32-32,32V96z M336,448
				c20.336,0.025,38.458,12.837,45.264,32H130.736c6.806-19.163,24.928-31.975,45.264-32H336z M240,416v-64h32v64H240z M135.264,320
				L32,201.984V112c0-8.837,7.163-16,16-16h16v90.816L152.752,288h194.272l99.776,68.592c6.72,4.705,8.794,13.73,4.8,20.896
				c-4.347,7.592-14.026,10.221-21.617,5.874c-0.456-0.261-0.899-0.545-1.327-0.85L341.12,320H135.264z"
      />
      <path
        d="M352,0v48h-88.24L237.28,2.144l-83.2,48l67.2,116.352l83.2-48L282.24,80H352v144h32v-96h96v176h32V0H352z
				 M233.04,122.784l-35.2-60.928l27.712-16l35.2,60.928L233.04,122.784z M480,96h-96V32h96V96z"
      />
      <polygon points="480,480 448,480 448,512 512,512 512,432 480,432 			" />
      <rect x="416" y="160" width="32" height="32" />
    </svg>
  )
}
LogoSvg.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}
export default LogoSvg
