import React from "react"
import PropTypes from "prop-types"
import {
  // barby,
  // catalina,
  // electric,
  lavander,
} from "../MuiWrappers/facialColors"

import {
  withStyles,
  Paper,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core"

export const styles = theme => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 400,
      margin: "0 auto",
    },
    formControl: {
      margin: 16,
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        margin: "16px 8px",
      },
      "& label": {
        zIndex: 10,
      },
    },
    select: {
      background: lavander[50],
      minHeight: 70,
      outline: "none",
      cursor: "pointer",
      "&:focus": {
        outline: "none",
      },
      "& #select-service": {
        paddingTop: 24,
      },
      "& #select-master": {
        paddingTop: 12,
      },
    },
    focusedInp: {
      outline: "none",
    },
    avatar: {
      margin: "0 16px 0 8px",
      width: 50,
      height: 50,
      display: "inline-block",
      background: lavander[100],
      border: `3px solid ${lavander[200]}`,
    },
    menuItem: {
      height: 40,
    },
    selectDisplay: {
      minHeight: 70,
      outline: "none",
      cursor: "pointer",
    },
    card: {
      textAlign: "center",
      width: "60%",
      minWidth: 270,
      margin: " 2rem auto",
    },
  }
}

function MastersStep(props) {
  const {
    classes,
    handleChange,
    master,
    mastersList,
    service,
    servicesList,
  } = props
  console.log(mastersList)
  return (
    <Paper className={classes.card}>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="master">Оберіть косметолога</InputLabel>
          <Select
            value={master}
            className={classes.select}
            onChange={handleChange("master")}
            SelectDisplayProps={{
              className: classes.selectDisplay,
            }}
            inputProps={{
              name: "master",
              id: "master",
            }}
          >
            <MenuItem value="" style={{ paddingLeft: 48 }}>
              <em>Не обрано</em>
            </MenuItem>
            {mastersList.map((person, i) => (
              <MenuItem
                value={person.node.name}
                key={i}
                className={classes.menuItem}
              >
                <Avatar
                  src={person.node.image.src.publicURL}
                  className={classes.avatar}
                />{" "}
                {person.node.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="service">Оберіть процедуру</InputLabel>
          <Select
            value={service}
            className={classes.select}
            onChange={handleChange("service")}
            SelectDisplayProps={{
              className: classes.selectDisplay,
            }}
            inputProps={{
              name: "service",
              id: "service",
            }}
          >
            <MenuItem value="" style={{ paddingLeft: 48 }}>
              <em>Не обрано</em>
            </MenuItem>
            {servicesList.map((service, i) => (
              <MenuItem
                value={service.node.category}
                key={i}
                className={classes.menuItem}
              >
                {service.node.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </Paper>
  )
}

MastersStep.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  master: PropTypes.string,
  mastersList: PropTypes.array,
  service: PropTypes.string,
  servicesList: PropTypes.array,
}
export default withStyles(styles)(MastersStep)
