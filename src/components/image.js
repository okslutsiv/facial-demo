import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "header-dark.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Background
