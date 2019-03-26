import React from "react"
import PropTypes from "prop-types"

import { withStyles } from "@material-ui/core/styles"
import {
  Grid,
  Collapse,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  ButtonBase,
  Button,
} from "@material-ui/core"
import { DotsHorizontal } from "mdi-material-ui"
import LogoSvg from "../atoms/logoSvg"
import {
  // catalina,
  barby,
  lavander,
  // electric,
} from "../MuiWrappers/facialColors"
import PriceTable from "./PriceTable"

const styles = theme => {
  return {
    card: {
      maxWidth: 860,
      margin: "3rem auto",
      overflow: "visible",
      border: "12px solid white",
    },
    media: {
      height: "calc(100% - 24px)",
      minHeight: 200,
      backgroundSize: "cover",
      borderRadius: "0.25rem",
    },
    actions: {
      marginTop: "-1.5rem",
      marginBottom: "-2rem",
      width: "100%",
      textAlign: "center",
    },
    collapse: {
      marginTop: "3rem",
    },
    title: {
      textAlign: "center",
      marginTop: "2rem",
      fontWeight: 400,
      fontSize: 16,
      color: barby[300],
    },
    content: {
      padding: "1vh 2vw",
      textAlign: "justify",
      "& svg": {
        fill: lavander[500],
      },
    },
    button: {
      fontSize: "0.8rem",
      height: 44,
      width: 44,
      padding: 0,
      marginLeft: "50%",
      transform: "translateX(-50%)",
    },
    expand: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }
}

class PricePanel extends React.Component {
  state = {
    expanded: false,
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }
  render() {
    const { classes, image, title, description, pricelist } = this.props
    const { leftImg } = this.props || false
    const { expanded } = this.state
    const leftImgPanel = (
      <>
        <ButtonBase onClick={this.handleExpandClick}>
          <Grid container justify="center" alignContent="flex-end">
            <Grid item xs={10} sm={4}>
              <CardMedia className={classes.media} image={image} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h4" className={classes.title}>
                  {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
                <DotsHorizontal />
              </CardContent>
            </Grid>
          </Grid>
        </ButtonBase>
      </>
    )
    return (
      <Card className={classes.card}>
        <Grid container>
          {leftImg ? (
            leftImgPanel
          ) : (
            <>
              {" "}
              <ButtonBase onClick={this.handleExpandClick}>
                <Grid container justify="center" alignContent="flex-end">
                  <Grid item xs={12} sm={8}>
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h4"
                        className={classes.title}
                      >
                        {title}
                      </Typography>
                      <Typography variant="body1">{description}</Typography>
                      <DotsHorizontal />
                    </CardContent>
                  </Grid>
                  <Grid item xs={10} sm={4}>
                    <CardMedia className={classes.media} image={image} />
                  </Grid>
                </Grid>
              </ButtonBase>
            </>
          )}
          <CardActions className={classes.actions} disableActionSpacing>
            <Button
              onClick={this.handleExpandClick}
              variant="contained"
              color="secondary"
              className={classes.button}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
              size="small"
            >
              <LogoSvg
                width="32px"
                height="32px"
                stroke="white"
                className={expanded ? classes.expandOpen : classes.expand}
              />
            </Button>
          </CardActions>
        </Grid>

        <Collapse
          in={this.state.expanded}
          className={classes.collapse}
          timeout="auto"
          unmountOnExit
        >
          <CardContent className={classes.content}>
            <PriceTable pricelist={pricelist} />
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

PricePanel.propTypes = {
  classes: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  pricelist: PropTypes.array,
  leftImg: PropTypes.bool,
}

export default withStyles(styles)(PricePanel)
