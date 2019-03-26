import React from "react"
import PropTypes from "prop-types"
import { withStyles, Grid, Typography } from "@material-ui/core"
import bgMix from "../../images/bg-mix.png"
import botulina from "../../images/botulina.jpg"
import quality from "../../images/quality.png"
import equip from "../../images/equip.jpg"

export const styles = theme => {
  return {
    root: {
      padding: "5%",
      backgroundImage: `url(${bgMix})`,
      textAlign: "center",
    },
    title: {
      color: "white",
      textAlign: "center",
      marginBottom: "2rem",
    },
    image: {
      maxWidth: 300,
      borderRadius: 22,
      border: "12px solid white",
      width: "100%",
      boxShadow:
        "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
    },
  }
}

function Features(props) {
  const { classes } = props
  return (
    <section className={classes.root}>
      <Grid container alignItems="center" justify="center" spacing={40}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Сучасне обладнання</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            maiores quod quos dolores cumque, molestias, deleniti, neque nulla
            pariatur recusandae architecto quia distinctio officia
            necessitatibus vitae numquam eveniet porro veniam?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={equip} className={classes.image} alt="quality" />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={40}>
        <Grid item xs={12} sm={6}>
          <img src={botulina} className={classes.image} alt="quality" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Інноваційні продукти</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            maiores quod quos dolores cumque, molestias, deleniti, neque nulla
            pariatur recusandae architecto quia distinctio officia
            necessitatibus vitae numquam eveniet porro veniam?
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={40}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Фахові косметологи</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            maiores quod quos dolores cumque, molestias, deleniti, neque nulla
            pariatur recusandae architecto quia distinctio officia
            necessitatibus vitae numquam eveniet porro veniam?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={quality} className={classes.image} alt="quality" />
        </Grid>
      </Grid>
    </section>
  )
}

Features.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Features)
