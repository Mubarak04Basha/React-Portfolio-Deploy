import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAnimate, useInView } from 'framer-motion'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { StepContent } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'

export default function Exp() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  const steps = [
    {
      label: 'Government Boys Higher Secondary School Palacode',
      time: '2020-2022',
      description:
        'I am studied Computer Science and learn from basis to advanve with the Real Time in School like computer applications sample coding with advance be here learn to easy for that and do code with on system Smarter.',
    },
    {
      label: 'Don Bosco College, Dharmapuri',
      time: '2022-2025',
      description:
        'I Have Completed my Bachelors Degree of BCA in Periyar university (Salem) and I learn lot of things on there Extra Curricular Activities and Adzabs, Seminars group Discussions,Time Management Made me Strong Foundation and with Coding Skills Web Technologies.',
    },
    {
      label: 'Internship',
      time: 'March-2023 June-2023',
      description:
        'In Intership designed,developed and deployed responsive web applications using HTML,CSS,JAVASCRIPT,REACT JS frameworks user Engagement by 20% through Enhanced interactive features.'
        ,
    },
  ]

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          delay: 0.2,
          duration: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])
  return (
    <div
      className=" w-full h-screen flex flex-col items-center justify-center gap-4 lg:gap-8 max-w-[600px]"
      id="experience"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl text-center mb-4 font-bold">Education</h1>
        <Box sx={{ maxWidth: 500 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography
                        sx={{ color: colorTheme.primaryText }}
                        variant="caption"
                      >
                        Last step
                      </Typography>
                    ) : null
                  }
                >
                  <Typography
                    sx={{ color: colorTheme.primaryText }}
                    variant="caption"
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography
                    sx={{ color: colorTheme.primaryText, fontWeight: 'bold' }}
                    variant="h6"
                    component={'div'}
                    className="mb-2"
                  >
                    {step.time}
                  </Typography>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === 2 && (
            <Paper
              square
              elevation={0}
              sx={{
                p: 2,
                bgcolor: colorTheme.primaryBg,
              }}
            >
              <Button variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        <div className="w-full flex justify-center mt-8"></div>
      </div>
    </div>
  )
}
