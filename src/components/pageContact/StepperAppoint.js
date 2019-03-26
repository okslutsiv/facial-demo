import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"
import ukLocale from "date-fns/locale/uk"

import MasterStep from "./MasterStep"
import DateStep from "./DateStep"
import PersonStep from "./PersonStep"
import Success from "./Success"
import { navigate } from "gatsby"
import {
  // barby,
  catalina,
  // electric,
  lavander,
} from "../MuiWrappers/facialColors"

import {
  withStyles,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
} from "@material-ui/core"

const styles = theme => {
  return {
    root: {
      width: "90%",
      margin: "2rem auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    card: {
      textAlign: "center",
      width: "90%",
      minWidth: 270,
      margin: " 2rem auto",
    },

    success: {
      padding: "2rem 3rem",
      "& p": { lineHeight: 2 },
      maxWidth: 600,
      textAlign: "justify",
      margin: "1rem auto",

      "& span": {
        color: catalina[500],
        background: lavander[50],
        margin: "0 1rem",
        padding: " 0 1rem",
        fontWeight: 500,
      },
      [theme.breakpoints.down("sm")]: {
        padding: "16px 8px",
        textAlign: "left",
      },
    },

    backButton: {
      marginRight: 16,
    },
    instructions: {
      marginTop: 16,
      marginBottom: 16,
    },
    navigation: {
      marginTop: "2rem",
      textAlign: "center",
    },
  }
}

function getSteps() {
  return ["Сервіс", "Дата", "Контакти"]
}
function daypartLocal(daypart) {
  switch (daypart) {
    case "morning":
      return "ранок"
    case "day":
      return "ранок"
    case "evening":
      return "ранок"
    case "nomatter":
      return "будь-який час"
    default:
      return "не визначено"
  }
}

class StepperAppoint extends React.Component {
  state = {
    activeStep: 0,
    master: "",
    selectedDate: new Date(),
    daypart: "",
    name: "",
    phone: "",
    service: "",
    validPhone: false,
    validName: false,
    openModal: false,
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <MasterStep
            mastersList={this.props.masters}
            handleChange={this.handleChange}
            master={this.state.master}
            service={this.state.service}
            servicesList={this.props.services}
          />
        )
      case 1:
        return (
          <DateStep
            date={this.state.selectedDate}
            daypart={this.state.daypart}
            handleDateChange={this.handleDateChange}
            handleDaypartChange={this.handleChange("daypart")}
            handleChange={this.handleChange}
          />
        )
      case 2:
        return (
          <PersonStep
            name={this.state.name}
            phone={this.state.phone}
            handleChange={this.handleChange}
            validateName={this.validateName}
            validatePhone={this.validatePhone}
            validPhone={this.state.validPhone}
            validName={this.state.validName}
            handleOnEnterPress={this.handleOnEnterPress}
          />
        )
      default:
        return "Unknown stepIndex"
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
      master: "",
      daypart: "",
      name: "",
      phone: "",
      service: "",
      validPhone: false,
      validName: false,
      selectedDate: new Date(),
    })
  }
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    })
  }
  handleCloseModal = () => {
    this.setState({ openModal: false })
    navigate("/")
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  handleSubmit = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
      openModal: true,
      master: "",
      daypart: "",
      name: "",
      phone: "",
      service: "",
      selectedDate: new Date(),
      validPhone: false,
      validName: false,
    })
  }

  handleOnEnterPress = e => {
    if (e.which === 13) e.target.blur()
  }

  validateName = () => {
    const regex = /^[А-Яа-яA-Za-z ]+$/g
    const validName = regex.test(this.state.name)
    this.setState({ validName: validName })
  }
  validatePhone = () => {
    const regex = /^[+]?[0-9]{2}[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/
    const validPhone = regex.test(this.state.phone)
    this.setState({ validPhone: validPhone })
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep, master, service } = this.state

    return (
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          style={{ padding: "1rem", borderRadius: 4 }}
          alternativeLabel
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Paper elevation={2} className={classes.card}>
                <div className={classes.success}>
                  <Typography
                    variant="h5"
                    color="primary"
                    style={{ marginBottom: 36, textAlign: "center" }}
                  >
                    Всі кроки завершені
                  </Typography>
                  {master.length > 0 ? (
                    <Typography>
                      Ви обрали запис до майстра<span> {master}</span>
                    </Typography>
                  ) : (
                    <Typography>Ви не обирали майстра </Typography>
                  )}

                  {service.length > 0 ? (
                    <Typography>
                      Обрана послуга: <span> {service}</span>
                    </Typography>
                  ) : (
                    <Typography>Послуга Вами не обрана</Typography>
                  )}
                  <Typography>
                    Вас влаштовує дата{" "}
                    <span>
                      {format(this.state.selectedDate, "dd MMMM yyy ", {
                        locale: ukLocale,
                      })}{" "}
                      року
                    </span>
                  </Typography>
                  {this.state.daypart ? (
                    <Typography>
                      Пора дня: <span>{daypartLocal(this.state.daypart)}</span>
                    </Typography>
                  ) : null}
                  <Typography>
                    Вас звати <span>{this.state.name}</span> <br />
                    Ваш контактний номер телефону{" "}
                    <span>{this.state.phone}</span>
                  </Typography>
                  <Typography>
                    {" "}
                    Все вірно?
                    <br /> Будь-ласка, натисніть кнопку <span>"Надіслати"</span>
                    .
                  </Typography>
                </div>
              </Paper>
              <div className={classes.navigation}>
                <Button
                  size="large"
                  onClick={this.handleReset}
                  variant="text"
                  color="primary"
                  className={classes.backButton}
                >
                  Очистити
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Надіслати
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {this.getStepContent(activeStep)}

              <div className={classes.navigation}>
                <Button
                  size="large"
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                  color="primary"
                >
                  Назад
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  disabled={
                    activeStep === steps.length - 1 &&
                    (!this.state.validName || !this.state.validPhone)
                      ? true
                      : false
                  }
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Готово" : "Далі"}
                </Button>
              </div>
            </div>
          )}
          <Success
            openModal={this.state.openModal}
            handleCloseModal={this.handleCloseModal}
          />{" "}
        </div>
      </div>
    )
  }
}

StepperAppoint.propTypes = {
  classes: PropTypes.object,
  masters: PropTypes.array,
  services: PropTypes.array,
}

export default withStyles(styles)(StepperAppoint)
