import PersonalForm from "./PersonalForm";
import PlanForm from "./PlanForm";
import AddOnsForm from "./AddOnsForm";
import SummaryForm from "./SummaryForm";
import { StyledForm, FormSection, ButtonsSection } from "./Form.style";
import { useMemo } from "react";
import Button from "../Button/Button";

interface IFormProps {
 currentStep: number;
 onNextStep: () => void;
 onPrevStep: () => void;
 stepsNumber: number;
}

const Form = ({
 currentStep,
 onNextStep,
 onPrevStep,
 stepsNumber,
}: IFormProps) => {
 const activeForm = useMemo(() => {
  if (currentStep === 0) return <PersonalForm />;
  else if (currentStep === 1) return <PlanForm />;
  else if (currentStep === 2) return <AddOnsForm />;
  else return <SummaryForm />;
 }, [currentStep]);
 return (
  <StyledForm>
   <FormSection>{activeForm}</FormSection>
   <ButtonsSection>
    <Button kind={currentStep === stepsNumber - 1 ? "confirm" : "next"} />
    {currentStep > 0 && (
     <Button
      kind="prev"
      onClick={onPrevStep}
     />
    )}
   </ButtonsSection>
  </StyledForm>
 );
};

export default Form;
