import React from "react"
import PropTypes from "prop-types"

import {
  barby,
  //   catalina,
  //   electric,
  //   lavander,
} from "../MuiWrappers/facialColors"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  withStyles,
} from "@material-ui/core"

const styles = theme => {
  return {
    root: {
      color: barby[900],
    },
  }
}

function AlertDialog(props) {
  const { openModal, handleCloseModal, classes } = props

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.root}
          >
            Ваш запит прийнято. Очікуйте дзвінка адміністратора.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Зрозуміло
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
AlertDialog.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(AlertDialog)
