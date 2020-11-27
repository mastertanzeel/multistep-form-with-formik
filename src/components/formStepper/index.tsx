import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Importing Form Steps
import StepOne from "../stepOne/index";
import StepTwo from "../stepTwo/index";
import StepThree from "../stepThree/index";

import { useStyles } from "./style";

function getSteps() {
  return ["Personal Information", "Social Information", "Account Details"];
}

function getStepContent(stepIndex: number, handleNext: () => void) {
  switch (stepIndex) {
    case 0:
      return <StepOne handleNext={handleNext} />;
    case 1:
      return <StepTwo handleNext={handleNext} />;
    case 2:
      return <StepThree handleNext={handleNext} />;
    default:
      return "Oh Snap! Step not found!";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <h1 style={{ marginBottom: "20px" }}>Create Your Account</h1>
        {activeStep === steps.length ? (
          <div style={{ marginTop: "30px" }}>
            <Typography variant="h6" className={classes.instructions}>
              Account has been created successfully.
            </Typography>
            <Button onClick={handleReset} variant="contained" color="primary">
              Create New
            </Button>
          </div>
        ) : (
          <div>{getStepContent(activeStep, handleNext)}</div>
        )}
      </div>
    </div>
  );
}
