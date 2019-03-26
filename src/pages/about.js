import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import withRoot from "../components/MuiWrappers/withRoot"
import { withStyles, Typography } from "@material-ui/core"
import LogoSvg from "../components/atoms/logoSvg"
import Main from "../components/main"
import { HomeMapMarker, Phone, Alarm } from "mdi-material-ui"
import HeroAbout from "../components/pageAbout/heroAbout"
import Map from "../components/pageAbout/map"
import Features from "../components/pageAbout/features"
import {
  // barby,
  catalina,
  // electric,
  lavander,
} from "../components/MuiWrappers/facialColors"

const styles = theme => ({
  root: {
    // textAlign: "center",
    // paddingTop: theme.spacing.unit * 40,
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
  working: {
    background: "rgba(255, 255, 255, 1)",
    padding: "24px 0 24px",
    marginTop: 48,
    borderTopRightRadius: 66,
    borderTopLeftRadius: 66,
    "& p": {
      color: "lavander[900]",
      lineHeight: 1.5,
      paddingTop: 6,

      "& span": {
        color: lavander[100],
        transform: "translateY(6px)",
        display: "inline-block",
      },
    },
  },

  heroImg: {
    height: "100%",
  },
})

function About(props) {
  const { classes } = props

  return (
    <Layout>
      <SEO title="Page services" />
      <Main>
        <HeroAbout />
        <div className={classes.intro}>
          <Typography variant="body1" gutterBottom>
            Ми пишаємось неперевершеною репутацією одного з найуспішніших та
            інноваційних косметичних салонів Львова.
          </Typography>
        </div>
        <Features />
        <div className={classes.working}>
          <LogoSvg />
          <Typography variant="body2">
            <span>
              <HomeMapMarker />
            </span>{" "}
            м.Львів, вул.Болгарська,1
          </Typography>
          <Typography variant="body2">
            <span>
              <Phone />
            </span>{" "}
            +380 (067) 123-45-67
          </Typography>
          <Typography variant="body2">
            <span>
              <Alarm />
            </span>{" "}
            Пн-Сб з 8:00 до 20:00
          </Typography>
        </div>
        <Map />
      </Main>
    </Layout>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(About))
