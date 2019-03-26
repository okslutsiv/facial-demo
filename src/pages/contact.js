import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { withStyles, Typography } from "@material-ui/core"
import withRoot from "../components/MuiWrappers/withRoot"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import bgMix from "../images/bg-mix.png"
import {
  // barby,
  catalina,
  // electric,
  // lavander,
} from "../components/MuiWrappers/facialColors"

import StepperAppoint from "../components/pageContact/StepperAppoint"
import HeroContact from "../components/pageContact/heroContact"
const styles = theme => {
  return {
    root: {
      padding: "0 2rem 2rem",
      backgroundImage: `url(${bgMix})`,
      [theme.breakpoints.down("sm")]: {
        padding: 4,
      },
    },
    intro: {
      textAlign: "right",
      padding: 32,
      paddingLeft: "15%",
      "& p": {
        lineHeight: 1.8,
        color: catalina[500],
        fontWeight: 500,
        opacity: 0.8,
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 16px)",
        margin: 8,
        padding: 8,
      },
    },

    title: {
      textAlign: "center",
    },

    brands: {
      margin: "36px 24px 0",
    },
  }
}

const ContactPage = props => {
  const { classes, data } = props
  const masters = data.allMastersJson.edges
  const services = data.allServicesJson.edges

  return (
    <Layout>
      <SEO title="BOOK APPOINTMENT" />
      <Main>
        <HeroContact />
        <div className={classes.intro}>
          <Typography variant="body1" gutterBottom>
            Забронюйте послугу просто зараз у кілька простих кроків.
          </Typography>
        </div>
        <div className={classes.root}>
          <StepperAppoint masters={masters} services={services} />
        </div>
      </Main>
    </Layout>
  )
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const query = graphql`
  query ContactPageQuery {
    allServicesJson {
      edges {
        node {
          category
          pricelist {
            service
            price
          }
        }
      }
    }
    allMastersJson {
      edges {
        node {
          id
          name
          image {
            src {
              publicURL
            }
          }
        }
      }
    }
  }
`
ContactPage.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
}
export default withRoot(withStyles(styles)(ContactPage))
