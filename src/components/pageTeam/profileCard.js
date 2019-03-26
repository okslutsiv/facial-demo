import React from "react"
import PropTypes from "prop-types"
import EducationSvg from "../atoms/educationSvg"
import ExperienceSvg from "../atoms/experienceSvg"

import {
  withStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core"
import { barby, catalina, lavander } from "../MuiWrappers/facialColors"

export const styles = theme => {
  return {
    card: {
      maxWidth: 860,
      margin: "3rem auto",
      border: "12px solid #fff",
    },
    media: {
      height: 200,
      width: "100%",
      backgroundSize: "cover",
      borderRadius: "0.25rem",
      backgroundImage: `radial-gradient(${lavander[50]} 50%, ${lavander.A100})`,
      position: "relative",
      "& img": {
        position: "absolute",
        bottom: 0,
        left: "20%",
        maxHeight: "100%",
        width: "auto",
        [theme.breakpoints.up("sm")]: {
          left: 0,
        },
      },
    },
    bio: {
      marginTop: 12,
      paddingTop: 16,
      marginBottom: "2rem",
      width: "100%",
      textAlign: "justify",
      borderTop: `1px solid ${lavander[200]}`,
    },
    title: {
      textAlign: "center",
      margin: "16px 0",
      fontWeight: 400,
      fontSize: 24,
      color: barby[300],
      "& span": {
        color: catalina[500],
        fontSize: 12,
        display: "block",
        letterSpacing: 1,
      },
    },
    content: {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
      "&:not(:last-child)": {
        marginBottom: 8,
      },
      "& svg": {
        marginRight: 24,
        transform: "translateY(6px)",
        [theme.breakpoints.down("sm")]: {
          marginRight: 8,
          width: 18,
        },
      },
    },
  }
}

function profileCard(props) {
  const {
    classes,
    image,
    graduated,
    name,
    description,
    specialty,
    leftImg,
  } = props

  const cardContent = (
    <Grid item xs={12} sm={8}>
      <CardContent>
        <Typography gutterBottom className={classes.title}>
          {name}
          <span>{specialty}</span>
        </Typography>{" "}
        <Typography className={classes.content}>
          {" "}
          <EducationSvg />
          {graduated}
        </Typography>
        <Typography className={classes.content}>
          <ExperienceSvg />
          {description}
        </Typography>
      </CardContent>
    </Grid>
  )
  const leftImgPanel = (
    <>
      <Grid item xs={12} sm={4}>
        <div className={classes.media}>
          <img src={image} />
        </div>
      </Grid>
      {cardContent}
    </>
  )

  return (
    <Card className={classes.card}>
      <Grid container justify="center" alignContent="flex-end">
        {leftImg ? (
          leftImgPanel
        ) : (
          <>
            {cardContent}
            <Grid item xs={12} sm={4}>
              <div className={classes.media}>
                <img src={image} />
              </div>
            </Grid>
          </>
        )}
      </Grid>
      <Typography className={classes.bio}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
        eligendi dolorum asperiores mollitia architecto iure deleniti sunt
        debitis magni quia? Alias tempora soluta in reprehenderit ab harum
        provident. Sequi, commodi!
      </Typography>
    </Card>
  )
}

profileCard.propTypes = {
  classes: PropTypes.object,
  image: PropTypes.string,
  graduated: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  specialty: PropTypes.string,
  leftImg: PropTypes.bool,
}

export default withStyles(styles)(profileCard)
