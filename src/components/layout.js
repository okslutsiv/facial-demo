import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import { withStyles, Typography } from "@material-ui/core"
import Background from "../images/processed/header-bg"

import Header from "./header"
import "./layout.css"

const styles = theme => ({
  root: {
    margin: "0 auto",
    minHeight: "100vh",
    backgroundImage: `radial-gradient(rgba(2,6,13,0.4)20%, rgba(2,6,13,0.2))`,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1rem",
    },
    paddingTop: "calc(50vh - 250px)",
    "& p": {
      color: "white",
      fontSize: 12,
      letterSpacing: 3,
      fontWeight: 300,
      textTransform: "uppercase",
      "& span": {
        margin: "0 20px",
        [theme.breakpoints.down("sm")]: {
          display: "block",
        },
      },
    },
    "& h5": {
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        letterSpacing: 3,
      },
      color: "white",
    },
    "& footer": {
      position: "fixed",
      left: 0,
      bottom: 0,
      paddingBottom: 5,
      background: "rgba(2,6,13,0.4)",
      width: "100%",
      textAlign: "center",
      "& p": {
        textTransform: "none",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: 48,
        position: "static",
      },
    },
  },
})
const Layout = ({ children, classes }) => (
  <Background>
    <div className={classes.root}>
      <Header />

      <main>{children}</main>
      <footer>
        <Typography>
          <span>&copy; 2019 design&development</span>
          <span>OksLutsiv</span>
        </Typography>
      </footer>
    </div>
  </Background>
)

Layout.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
}

export default withStyles(styles)(Layout)
