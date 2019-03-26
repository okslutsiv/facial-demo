import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withStyles, Typography, Button } from "@material-ui/core"
import LogoSvg from "./atoms/logoSvg"

const styles = theme => {
  const { primary, secondary } = theme.palette
  return {
    root: {
      margin: "0 auto",
      minHeight: "100vh",
      backgroundImage: `radial-gradient(rgba(2,6,13,0.4)20%, rgba(2,6,13,0.2))`,
      [theme.breakpoints.down("sm")]: {
        paddingTop: "1rem",
      },
      paddingTop: "calc(50vh - 220px)",
    },
    content: {
      maxWidth: 650,
      width: "90%",
      margin: "49px auto",
      textAlign: "center",
      color: "white",
      borderTop: "2px solid white",
      borderBottom: "2px solid white",
      position: "relative",
      padding: "48px 0",
      textShadow: `0 0 12px ${primary.dark}`,
      "&::before": {
        content: ' ""',
        display: "block",
        position: "absolute",
        top: "-50px",
        left: "calc(50% - 1px)",
        width: 1,
        height: 50,
        background: "white",
      },

      "& h1": {
        color: "white",
        fontSize: 48,
        lineHeight: 1.2,
        letterSpacing: 5,
        fontWeight: 500,
      },
      "& p": {
        color: "white",
        fontSize: 12,
        letterSpacing: 3,
        fontWeight: 300,
        textTransform: "uppercase",
      },
      "& h5": {
        color: "white",
        [theme.breakpoints.down("sm")]: {
          fontSize: 14,
          letterSpacing: 3,
        },
      },
    },

    logo: {
      marginLeft: "50%",
      transform: "translateX(-50%)",
      width: 80,
      height: 80,
      borderRadius: "50%",
      border: "1px solid white",
      background: "rgba(2,6,13,0.2)",
    },
    logoSvg: {
      margin: "11px 14px",
      opacity: 0.85,
    },
    navButtons: {
      marginLeft: "50%",
      transform: "translateX(-50%)",
      display: "inline-flex",
      color: "white",
      background: "rgba(2,6,13,0.2)",
      borderRadius: 22,
      overflow: "hidden",
      border: "2px solid white",
      [theme.breakpoints.down("md")]: {
        flexFlow: "column",
        "& button": {
          borderBottom: "1px solid white",
          width: "250px",
        },
      },
      [theme.breakpoints.up("md")]: {
        flexFlow: "row",
        "& button": {
          borderRight: "1px solid white",
          width: "120px",
        },
      },
    },
    navBtn: {
      borderRight: "1px solid white",
      borderRadius: 0,
      margin: "1px -1px 0",
      textAlign: "center",
      height: 44,
      fontWeight: 300,
      "&:focus": {
        backgroundColor: secondary.main,
      },
      "&:hover": {
        backgroundColor: secondary.main,
      },
    },
    navBtnLbl: {
      fontSize: 11,
      letterSpacing: 2,
    },
  }
}

const Header = ({ classes }) => (
  <>
    <header className={classes.root1}>
      <div className={classes.logo}>
        <LogoSvg
          className={classes.logoSvg}
          stroke="white"
          width="50px"
          height="50px"
        />
      </div>
      <div className={classes.content}>
        <Typography variant="h1">BlooMe</Typography>
        <Typography variant="h5">Косметологія</Typography>
        <Typography>
          Ваша краса - наша професія.
          <wbr /> З любов'ю до Вас
        </Typography>
      </div>
      <div className={classes.navButtons}>
        <Link to="/about">
          <Button
            size="large"
            color="inherit"
            classes={{ root: classes.navBtn, label: classes.navBtnLbl }}
          >
            Про нас
          </Button>
        </Link>{" "}
        <Link to="/services">
          <Button
            size="large"
            color="inherit"
            classes={{ root: classes.navBtn, label: classes.navBtnLbl }}
          >
            Послуги
          </Button>
        </Link>{" "}
        <Link to="/team">
          <Button
            size="large"
            color="inherit"
            classes={{ root: classes.navBtn, label: classes.navBtnLbl }}
          >
            Команда
          </Button>
        </Link>{" "}
        <Link to="/contact">
          <Button
            size="large"
            color="inherit"
            classes={{ root: classes.navBtn, label: classes.navBtnLbl }}
          >
            Записатись
          </Button>
        </Link>{" "}
      </div>
    </header>
  </>
)

Header.propTypes = {
  classes: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
