import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import withRoot from "../components/MuiWrappers/withRoot"
import { withStyles, Typography, Grid } from "@material-ui/core"
import Main from "../components/main"
import HeroTeam from "../components/pageTeam/heroTeam"
import ProfileCard from "../components/pageTeam/profileCard"
import bgMix from "../images/bg-mix.png"
import {
  // barby,
  catalina,
  // electric,
  // lavander,
} from "../components/MuiWrappers/facialColors"

const styles = theme => ({
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
})

function Team({ classes, data }) {
  const masters = data.allMastersJson.edges
  const renderMasters = () =>
    masters.map((master, i) => (
      <Grid item xs={12} key={i}>
        <ProfileCard
          name={master.node.name}
          image={master.node.image.src.publicURL}
          leftImg={i % 2 !== 0}
          description={master.node.description}
          specialty={master.node.specialty}
          graduated={master.node.graduated}
        />
      </Grid>
    ))
  return (
    <Layout>
      <SEO title="Page services" />
      <Main>
        <HeroTeam />
        <div className={classes.intro}>
          <Typography variant="body1" gutterBottom>
            Наші косметологи - наша гордість і капітал.
          </Typography>
        </div>
        <div className={classes.root}>{renderMasters()}</div>
      </Main>
    </Layout>
  )
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
}
export const query = graphql`
  {
    allMastersJson {
      edges {
        node {
          id
          name
          description
          image {
            src {
              publicURL
            }
          }
          chipData
          graduated
          specialty
        }
      }
    }
  }
`

export default withRoot(withStyles(styles)(Team))
