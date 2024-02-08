import STEP_DATA from "@/data/stepData";
import { StyledStepSection, ImageWrapper, Steps } from "./StepSection.style";
import { useMemo } from "react";
import StepItem from "./StepItem";
import { useMultiFormContext } from "@/context/multistepFormContext";

const StepSection = () => {
 const { currentStep } = useMultiFormContext();
 const stepList = useMemo(() => {
  return STEP_DATA.map((step, index) => {
   let isActive = currentStep + 1 === step.number ? true : false;
   return (
    <StepItem
     key={index}
     number={step.number}
     title={step.title}
     desc={step.desc}
     isActive={isActive}
    />
   );
  });
 }, [currentStep]);

 return (
  <StyledStepSection>
   <ImageWrapper></ImageWrapper>
   <Steps>{stepList}</Steps>
  </StyledStepSection>
 );
};

export default StepSection;
