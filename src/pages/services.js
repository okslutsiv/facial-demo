import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import withRoot from "../components/MuiWrappers/withRoot"
import { withStyles } from "@material-ui/core"
import Main from "../components/main"
import HeroServices from "../components/pageServices/heroServices"
import PricePanel from "../components/pageServices/pricePanel"
import brands from "../images/brands.png"
import brandsSm from "../images/brands-sm.png"
import bgMix from "../images/bg-mix.png"

const styles = theme => ({
  root: {
    padding: "0 2rem 2rem",
    backgroundImage: `url(${bgMix})`,
    [theme.breakpoints.down("sm")]: {
      padding: 4,
    },
  },
  title: {
    textAlign: "center",
  },

  brands: {
    margin: "36px 24px 0",
  },
})

function Services({ classes, data }) {
  const services = data.allServicesJson.edges
  const renderService = () =>
    services.map((service, i) => (
      <PricePanel
        key={i}
        title={service.node.category}
        image={service.node.image.src.publicURL}
        description={service.node.intro}
        leftImg={i % 2 !== 0}
        pricelist={service.node.pricelist}
      />
    ))
  return (
    <Layout>
      <SEO title="Page services" />
      <Main>
        <HeroServices />
        <div className={classes.brands}>
          <img src={window.innerWidth < 500 ? brandsSm : brands} />
        </div>

        <div className={classes.root}>{renderService()}</div>
      </Main>
    </Layout>
  )
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
}
export const query = graphql`
  {
    allServicesJson {
      edges {
        node {
          category
          pricelist {
            service
            price
          }
          image {
            src {
              publicURL
            }
          }
          intro
        }
      }
    }
  }
`
Services.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
}
export default withRoot(withStyles(styles)(Services))
