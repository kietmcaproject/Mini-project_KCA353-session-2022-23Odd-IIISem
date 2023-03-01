import React, { useState } from "react";
import getSimilarSubject from "./api";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import "./LinearStepper";
import {Card,
  CardBlock,
  CardTitle, } from "react-bootstrap-card";


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Enter your high school marks",
    "Enter your intermediate marks",
    "Enter your first semester marks",
    "Enter your second semester marks",
  ];
}
const HighSchoolForm = () => {
  const { control, formState:{ errors }, } = useFormContext();
  console.log(errors);
  return (
    <>
      <Controller
        control={control}
        name="maths"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="maths"
            label="Mathematics"
            variant="outlined"
            placeholder="Enter maths marks"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.maths)}
            helperText={errors.maths?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="science"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="science"
            label="Science"
            variant="outlined"
            placeholder="Enter science marks"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.science)}
            helperText={errors.science?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="eng"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="eng"
            label="English"
            variant="outlined"
            placeholder="Enter english marks"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.eng)}
            helperText={errors.eng?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="hin"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="hin"
            label="Hindi"
            variant="outlined"
            placeholder="Enter hindi marks"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.hin)}
            helperText={errors.hin?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="com"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="com"
            label="Computer"
            variant="outlined"
            placeholder="Enter computer marks"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.com)}
            helperText={errors.com?.message}
          />
        )}
      />
      
    </>
  );
};
const InterForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="math"
        render={({ field }) => (
          <TextField
            id="math"
            label="Mathematics"
            variant="outlined"
            placeholder="Enter maths marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phy"
        render={({ field }) => (
          <TextField
            id="phy"
            label="Physics"
            variant="outlined"
            placeholder="Enter physics marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="en"
        render={({ field }) => (
          <TextField
            id="en"
            label="English"
            variant="outlined"
            placeholder="Enter english marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="hind"
        render={({ field }) => (
          <TextField
            id="hind"
            label="Hindi"
            variant="outlined"
            placeholder="Enter hindi marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="comp"
        render={({ field }) => (
          <TextField
            id="comp"
            label="Computer"
            variant="outlined"
            placeholder="Enter computer marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const FirstSem = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="fcet"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="fcet"
            label="Fundamental of Computers & Emerging Technologies"
            variant="outlined"
            placeholder="Enter fcet marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="c"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="c"
            label="Problem Solving using C"
            variant="outlined"
            placeholder="Enter C marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="pmc"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="pmc"
            label="Principles of Management & Communication "
            variant="outlined"
            placeholder="Enter Principles of Management & Communication marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="dm"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="dm"
            label="Discrete Mathematics "
            variant="outlined"
            placeholder="Enter DM marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="coa"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="coa"
            label="Computer Organization & Architecture "
            variant="outlined"
            placeholder="Enter COA marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const SecondSem = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="aut"
        render={({ field }) => (
          <TextField
            id="aut"
            label="Theory of Automata & Formal Languages"
            variant="outlined"
            placeholder="Enter Automata marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="oop"
        render={({ field }) => (
          <TextField
            id="oop"
            label="Object Oriented Programming"
            variant="outlined"
            placeholder="Enter OOPs marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="os"
        render={({ field }) => (
          <TextField
            id="os"
            label="Operating Systems "
            variant="outlined"
            placeholder="Enter Operating Systems marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="dbms"
        render={({ field }) => (
          <TextField
            id="dbms"
            label="Database Management Systems"
            variant="outlined"
            placeholder="Enter DBMS marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="ds"
        render={({ field }) => (
          <TextField
            id="ds"
            label="Data Structures & Analysis of Algorithms"
            variant="outlined"
            placeholder="Enter DSA marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="cyb"
        render={({ field }) => (
          <TextField
            id="cyb"
            label="Cyber Security"
            variant="outlined"
            placeholder="Enter Cyber Security marks"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <HighSchoolForm />;
    case 1:
      return <InterForm />;
    case 2:
      return <FirstSem />;
    case 3:
      return <SecondSem />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();

  function returnWithData(data){
    return (
      <div>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
  
        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Recommendation Generated
            <div class="box">
              <div ></div>
              <div >
              <Card>
                <CardBlock>
                  <CardTitle>{this.result}</CardTitle>
                </CardBlock>         
              </Card>    
              </div>
              <p class="text" style={{fontSize: "20px", }}>Note: Less score means highly recommended</p>
            </div>
          </Typography>        
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
  
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )}
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </form>
            </FormProvider>
          </>
        )}
      </div>
    );
  }

  const methods = useForm({
    defaultValues: {
      maths: "",
      science: "",
      eng: "",
      hin: "",
      com: "",
      math: "",
      phy: "",
      en: "",
      hind: "",
      comp: "",
      fcet: "",
      c: "",
      pmc: "",
      dm: "",
      coa: "",
      aut: "",
      oop: "",
      os: "",
      dbms: "",
      ds: "",
      cyb: "",
      
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 3;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  async function handleNext(data){
    if (activeStep === steps.length - 1) {
      let subjects = filterData(data);
      let payload = JSON.stringify({
        "subjects": subjects,
        "k": 2,
        "electives": [1, 2]
      });
      let body = await getSimilarSubject(payload);
      return returnWithData(body.data);
      
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const filterData = (data) => {
    let res = []
    if(data.fcet > 75)
      res.push("Fundamental of Computers & Emerging Technologies")
    if(data.c > 75)
      res.push("Problem Solving using C")
    if(data.pmc > 75)
      res.push("Principles of Management & Communication")
    if(data.dm > 75)
      res.push("Discrete Mathematics")
    if(data.coa > 75)
      res.push("Computer Organization & Architecture")
    return res;
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return returnWithData();
};

export default LinaerStepper;
