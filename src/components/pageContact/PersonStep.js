import React from "react"
import PropTypes from "prop-types"
import InputMask from "react-input-mask"
// import {
//   barby,
//   catalina,
//   electric,
//   lavander,
// } from "../MuiWrappers/facialColors"
import {
  withStyles,
  Typography,
  Paper,
  TextField,
  FormControl,
} from "@material-ui/core"

export const styles = theme => {
  return {
    card: {
      textAlign: "center",
      width: "60%",
      minWidth: 270,
      margin: " 2rem auto",
    },
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
  }
}

function PersonStep(props) {
  const {
    classes,
    name,
    phone,
    validateName,
    validatePhone,
    handleChange,
    validPhone,
    validName,
    handleOnEnterPress,
  } = props
  return (
    <>
      <Typography variant="body2" className={classes.label}>
        Обидва поля є обов&#39;язковими. Після їх заповнення коректними даними
        активізується кнопка "Готово"
      </Typography>
      <Paper className={classes.card}>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl} variant="filled">
            <TextField
              value={name}
              name="name"
              onChange={handleChange("name")}
              onBlur={validateName}
              onKeyUp={handleOnEnterPress}
              required
              type="text"
              label="Ваше ім'я"
              fullWidth
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={
                validName ? "OK" : "Літери кириличного або латинського алфавіту"
              }
            />

            <InputMask
              mask="+38(999) 999 99 99"
              value={phone}
              onChange={handleChange("phone")}
              onBlur={validatePhone}
            >
              {inputProps => (
                <TextField
                  name="phone"
                  required
                  label="Контактний телефон"
                  fullWidth
                  margin="normal"
                  variant="filled"
                  onKeyUp={handleOnEnterPress}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={validPhone ? "OK" : "Тільки арабські цифри"}
                />
              )}
            </InputMask>
          </FormControl>
        </form>
      </Paper>
    </>
  )
}

PersonStep.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  phone: PropTypes.string,
  validateName: PropTypes.func,
  validatePhone: PropTypes.func,
  handleChange: PropTypes.func,
  validPhone: PropTypes.bool,
  validName: PropTypes.bool,
  handleOnEnterPress: PropTypes.func,
}
export default withStyles(styles)(PersonStep)
