import { useMultiFormContext } from "@/context/multistepFormContext";
import Button from "../ui/Button/Button";
import { StyledButtonsSection } from "./ButtonsSection.style";

const ButtonsSection = () => {
 const { currentStep, stepsNumber, handlePrevStep } = useMultiFormContext();
 return (
  <StyledButtonsSection>
   <Button kind={currentStep === stepsNumber - 1 ? "confirm" : "next"} />
   {currentStep > 0 && (
    <Button
     kind="prev"
     onClick={handlePrevStep}
    />
   )}
  </StyledButtonsSection>
 );
};

export default ButtonsSection;
