"use client";
import PersonalForm from "./PersonalForm";
import PlanForm from "./PlanForm";
import AddOnsForm from "./AddOnsForm";
import SummaryForm from "./SummaryForm";
import { FormWrapper } from "./Form.style";
import { useMemo } from "react";
import { useMultiFormContext } from "@/context/multistepFormContext";

const Form = () => {
 const { currentStep } = useMultiFormContext();

 const activeForm = useMemo(() => {
  if (currentStep === 0) return <PersonalForm />;
  else if (currentStep === 1) return <PlanForm />;
  else if (currentStep === 2) return <AddOnsForm />;
  else return <SummaryForm />;
 }, [currentStep]);

 return (
  <FormWrapper>
   <FormWrapper>{activeForm}</FormWrapper>
  </FormWrapper>
 );
};

export default Form;
