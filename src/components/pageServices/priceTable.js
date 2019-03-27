import React from "react"
import PropTypes from "prop-types"
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"

const styles = theme => {
  const { primary, error, grey } = theme.palette

  return {
    table: {
      width: "100%",
      overflow: "hidden",
    },
    head: {
      backgroundColor: grey[500],
      color: "#fff",
      fontSize: 14,
      textTransform: "uppercase",
      fontWeight: 300,
      letterSpacing: 4,
      [theme.breakpoints.down("sm")]: {
        letterSpacing: 2,
      },
    },
    row: {
      "&:nth-of-type(even)": {
        backgroundColor: grey[50],
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        letterSpacing: 0.3,
      },
    },
    price: {
      color: error.dark,
      fontSize: 16,
    },
    name: {
      color: primary.dark,
      fontSize: 16,
      padding: "4px 1rem",
      marginLeft: 24,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 8,
      },
    },
  }
}

function PriceTable(props) {
  const { classes, pricelist } = props

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell align="center" className={classes.head}>
            Назва послуги
          </TableCell>
          <TableCell align="center" className={classes.head}>
            Ціна, грн
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pricelist.map((row, i) => (
          <TableRow key={i} className={classes.row}>
            <TableCell component="th" scope="row" className={classes.name}>
              {row.service}
            </TableCell>
            <TableCell align="right" className={classes.price}>
              {row.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

PriceTable.propTypes = {
  classes: PropTypes.object.isRequired,
  pricelist: PropTypes.array,
}

export default withStyles(styles)(PriceTable)
