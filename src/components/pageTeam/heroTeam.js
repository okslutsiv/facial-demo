import React from "react"
import PropTypes from "prop-types"

import { withStyles, Typography } from "@material-ui/core"
import HeroUnzip from "../../images/processed/hero-pen"

const styles = theme => {
  return {
    title: {
      color: "white",
      borderBottom: "1px solid white",
      position: "absolute",
      top: 150,
      right: 100,
      textAlign: "right",
      display: "inline-block",
      textShadow: "0 2px 7px rgba(2,6,13,0.3)",
      [theme.breakpoints.down("sm")]: {
        top: 200,
        right: 20,
      },
    },
  }
}
function heroTeam({ classes }) {
  return (
    <section>
      <HeroUnzip>
        <Typography variant="h2" gutterBottom className={classes.title}>
          Команда
        </Typography>
      </HeroUnzip>
    </section>
  )
}
heroTeam.propTypes = {
  classes: PropTypes.object,
}
export default withStyles(styles)(heroTeam)
