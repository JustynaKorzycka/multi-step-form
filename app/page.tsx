"use client";
import { useCallback, useState } from "react";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import StepSection from "@/components/StepSection/StepSection";
import STEP_DATA from "@/data/stepData";
import Form from "@/components/Form/Form";

export default function Home() {
 const [currentStep, setCurrentStep] = useState(3);

 const undoStepHandler = useCallback(() => {
  if (currentStep > 0) {
   setCurrentStep((prev) => prev - 1);
  }
 }, [currentStep]);

 const nextStepHandler = useCallback(() => {
  if (currentStep < STEP_DATA.length - 1) {
   setCurrentStep((prev) => prev + 1);
  }
 }, [currentStep]);

 return (
  <ContentWrapper>
   <div className="container">
    <StepSection currentStep={currentStep} />
    <Form
     currentStep={currentStep}
     onNextStep={nextStepHandler}
     onPrevStep={undoStepHandler}
     stepsNumber={STEP_DATA.length}
    />
   </div>
  </ContentWrapper>
 );
}
