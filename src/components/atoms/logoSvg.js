import React from "react"
import PropTypes from "prop-types"
import { barby } from "../MuiWrappers/facialColors"

function LogoSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "70px"}
      height={props.height || "70px"}
      stroke={props.stroke || barby[500]}
      fill={props.stroke || barby[500]}
      className={props.className}
      viewBox="0 0 64 64"
    >
      <path d="M61.229,38.319a42.037,42.037,0,0,0-9.33-.827c1.8-4.555,2.171-10.047,1.086-16.371a1,1,0,0,0-1.225-.8,35.321,35.321,0,0,0-9.549,4.3,31.238,31.238,0,0,0-9.52-13.4,1,1,0,0,0-1.324.09c-4.435,4.511-7.4,9.146-8.852,13.8A35.436,35.436,0,0,0,12.24,20.319a1,1,0,0,0-1.225.8c-1.085,6.324-.71,11.815,1.086,16.371a42.037,42.037,0,0,0-9.33.827.994.994,0,0,0-.658.512,1,1,0,0,0-.042.832c4.346,10.882,12.817,13.389,19.7,13.389A32.955,32.955,0,0,0,32,51.354a32.948,32.948,0,0,0,10.23,1.7c6.882,0,15.354-2.508,19.7-13.389a1,1,0,0,0-.042-.832A.994.994,0,0,0,61.229,38.319ZM49.682,37.6a26.337,26.337,0,0,0-10.494,2.9.982.982,0,0,0-.462.26h0a17.242,17.242,0,0,0-5.189,4.609,23.872,23.872,0,0,0-.509-5.5c1.2-5.077,4.285-9.4,9.2-12.858a34.769,34.769,0,0,1,8.967-4.437C52.049,28.456,51.533,33.5,49.682,37.6ZM32.149,13.368c1.761,1.559,6.441,6.167,8.345,12.447A24.185,24.185,0,0,0,32,36.5,23.833,23.833,0,0,0,24.226,26.36C25.435,22.021,28.086,17.657,32.149,13.368Zm-19.34,9.2a34.439,34.439,0,0,1,9.672,4.95h0a21.426,21.426,0,0,1,8.492,12.345,23.822,23.822,0,0,0-.51,5.5c-4.051-5.44-10.49-7.314-16.146-7.768C12.467,33.5,11.951,28.455,12.809,22.571Zm7.585,28.488C12.907,50.65,7.534,46.944,4.405,40.04c4.533-.772,20.881-2.608,26.272,9.648A30.251,30.251,0,0,1,20.394,51.059Zm23.212,0a30.31,30.31,0,0,1-10.283-1.371C38.713,37.433,55.06,39.269,59.6,40.04,56.466,46.944,51.093,50.65,43.606,51.059Z" />
      <rect x="31" y="18.292" width="2" height="2" />
      <rect x="31" y="22.292" width="2" height="2" />
      <rect x="31" y="26.292" width="2" height="2" />
      <path d="M14,26.292a15.238,15.238,0,0,0,2.168,7.555l1.664-1.11A13.4,13.4,0,0,1,16,26.291Z" />
      <path d="M50,26.292H48a13.31,13.31,0,0,1-1.832,6.445l1.664,1.11A15.238,15.238,0,0,0,50,26.292Z" />
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