import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const HeroBackground = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "hero-unzip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        Tag="div"
        style={{
          backgroundSize: `cover`,
          minHeight: `300px`,
          margin: "-16px 0 0 ",
          padding: 36,
        }}
        fluid={data.backgroundImage.childImageSharp.fluid}
      >
        {children}
      </BackgroundImage>
    )}
  />
)
export default HeroBackground
