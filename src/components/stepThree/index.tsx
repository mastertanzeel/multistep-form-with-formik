import React from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

// import validation schema
import { validationSchemaThree } from "../../utilities/validationSchemas/index";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const StepThree = ({ handleNext }: { handleNext: () => void }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const formik = useFormik({
    initialValues: {
      BankAccount: "",
      AccountNumber: 0,
    },
    onSubmit: () => {
      handleNext();
    },

    validationSchema: validationSchemaThree,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit} style={{ width: "70%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="BankAccount"
              label="Enter Name of Bank"
              name="BankAccount"
              autoComplete="BankAccount"
              value={formik.values.BankAccount}
              onChange={formik.handleChange}
              error={
                formik.touched.BankAccount && Boolean(formik.errors.BankAccount)
              }
              helperText={
                formik.touched.BankAccount && formik.errors.BankAccount
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="AccountNumber"
              label="Account Number"
              name="AccountNumber"
              type="number"
              autoComplete="AccountNumber"
              value={formik.values.AccountNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.AccountNumber &&
                Boolean(formik.errors.AccountNumber)
              }
              helperText={
                formik.touched.AccountNumber && formik.errors.AccountNumber
              }
            />
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                type="text"
                views={["year", "month", "date"]}
                value={selectedDate}
                format="dd/MM/yyyy"
                onChange={setSelectedDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default StepThree;
