import { useMultiFormContext } from "@/context/multistepFormContext";
import Button from "../ui/Button/Button";
import { StyledButtonsSection } from "./ButtonsSection.style";

const ButtonsSection = () => {
 const { currentStep, stepsNumber, handlePrevStep, handleSubmit } =
  useMultiFormContext();
 return (
  <StyledButtonsSection>
   {currentStep === stepsNumber - 1 ? (
    <Button
     kind="confirm"
     onClick={handleSubmit}
    />
   ) : (
    <Button kind="next" />
   )}
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
