import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"
import DateFnsUtils from "@date-io/date-fns"
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers"
import {
  withStyles,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@material-ui/core"
// import {
//   barby,
//   catalina,
//   electric,
//   lavander,
// } from "../MuiWrappers/facialColors"

import ukLocale from "date-fns/locale/uk"

export const styles = theme => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 400,
      margin: "0 auto",
      justifyContent: "center",
    },
    card: {
      textAlign: "center",
      width: "60%",
      minWidth: 270,
      margin: " 2rem auto",
      padding: 16,
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
    group: {
      justifyContent: "center",
    },
    picker: {
      margin: "8px 0 24px 0",
      "& input": {
        textAlign: "center",
        cursor: "pointer",
      },
    },
    label: {
      fontWeight: 400,
      padding: "1.5rem",
      fontSize: "1rem",
    },
    caption: {
      paddingRight: 12,
    },
  }
}

function DateStep(props) {
  const {
    classes,
    handleDateChange,
    handleDaypartChange,
    date,
    daypart,
  } = props

  return (
    <>
      <Paper elevation={2} className={classes.card}>
        <form className={classes.root} autoComplete="off">
          <FormLabel className={classes.label}>
            Оберіть зручну дату та час
          </FormLabel>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ukLocale}>
            <div className={classes.picker}>
              <DatePicker
                inputProps={{ id: "date" }}
                value={date}
                disablePast
                autoOk
                onChange={handleDateChange}
                variant="filled"
                format={format(date, "dd MMMM, yyy ", {
                  locale: ukLocale,
                })}
              />
            </div>
          </MuiPickersUtilsProvider>
          <FormControl className={classes.formControl}>
            <RadioGroup
              variant="filled"
              aria-label="Daypart"
              name="daypart"
              className={classes.group}
              value={daypart}
              onChange={handleDaypartChange}
              row
            >
              <FormControlLabel
                value="morning"
                control={<Radio color="primary" />}
                label="зранку"
                labelPlacement="end"
              />
              <FormControlLabel
                value="day"
                control={<Radio color="primary" />}
                label="в обід"
                labelPlacement="end"
              />
              <FormControlLabel
                value="evening"
                control={<Radio color="primary" />}
                label="ввечері"
                labelPlacement="end"
              />
              <FormControlLabel
                value="nomatter"
                control={<Radio color="primary" />}
                label="байдуже"
                labelPlacement="end"
              />
            </RadioGroup>{" "}
          </FormControl>
        </form>
      </Paper>
    </>
  )
}

DateStep.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDateChange: PropTypes.func,
  handleDaypartChange: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  daypart: PropTypes.array,
}
export default withStyles(styles)(DateStep)
