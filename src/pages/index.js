import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import withRoot from "../components/MuiWrappers/withRoot"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
  },
})

function Index(props) {
  const { classes } = props

  return (
    <Layout>
      <SEO title="Page one" />
    </Layout>
  )
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
