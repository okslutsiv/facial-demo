import React from "react"
import PropTypes from "prop-types"
import { lavander } from "../MuiWrappers/facialColors"

function Education(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24px"}
      height={props.height || "24px"}
      fill={props.stroke || lavander[100]}
      className={props.className}
      viewBox="0 0 791.803 791.803"
    >
      <path d="M395.904,475.016l-236.203-72.7v71.524v49.896c0,56.133,105.787,101.644,236.274,101.644   c130.48,0,236.285-45.511,236.285-101.644c0-0.442-0.145-0.886-0.154-1.318V402.316L395.904,475.016z" />
      <path d="M0,318.734l84.383,30.185l7.191-15.401l31-2.635l4.42,4.599l-26.601,6.308l-3.877,11.475   c-0.007,0-60.087,125.604-51.263,187.05c0,0,37.502,22.37,74.988,0l9.962-168v-13.984l55.8-12.588l-3.941,9.705l-41.604,13.529   l19.242,6.874l236.203,72.7l236.201-72.7l159.699-57.116l-395.9-152.313L0,318.734z" />
    </svg>
  )
}
Education.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}
export default Education
