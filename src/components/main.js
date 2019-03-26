import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { withStyles, Dialog, IconButton } from "@material-ui/core"
import { Close, Facebook, Instagram, Twitter } from "mdi-material-ui"

const styles = theme => ({
  root: {
    textAlign: "center",
  },
  backDrop: {
    backgroundColor: "rgba(2,6,13,0.6)",
  },
  paper: {
    background: "rgba(242,241,242,0.98)",
    padding: "16px 0",
    maxHeight: "none",
    width: "90%",
    maxWidth: 960,
    overflow: "hidden",
    position: "relative",
    margin: "70px auto ",
    [theme.breakpoints.only("md")]: {
      margin: 48,
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: 0,
      margin: 0,
    },
  },
})
function Main({ children, classes }) {
  const handleClose = () => {
    navigate("/")
  }

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        scroll="body"
        maxWidth="md"
        transitionDuration={500}
        classes={{
          root: classes.root,
          paper: classes.paper,
        }}
        BackdropProps={{
          classes: { root: classes.backDrop },
        }}
      >
        {" "}
        <div
          style={{
            position: "absolute",
            textAlign: "right",
            paddingBottom: 12,
            top: 10,
            right: 10,
            zIndex: 1500,
          }}
        >
          <IconButton color="secondary" onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
        {children}
        <div style={{ textAlign: "left", paddingTop: 12 }}>
          <IconButton color="primary">
            <Facebook />
          </IconButton>
          <IconButton color="primary">
            <Instagram />
          </IconButton>
          <IconButton color="primary">
            <Twitter />
          </IconButton>
        </div>
      </Dialog>
    </>
  )
}
Main.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
}
export default withStyles(styles)(Main)
