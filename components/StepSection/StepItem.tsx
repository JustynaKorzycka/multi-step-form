import { Number, StyledStepItem, TextSection } from "./StepItem.style";

interface IStepProps {
 number: number;
 title: string;
 desc: string;
 isActive: boolean;
}

const StepItem = ({ number, title, desc, isActive }: IStepProps) => {
 return (
  <StyledStepItem>
   <Number $active={isActive}>{number}</Number>
   <TextSection>
    <p className="step">{title}</p>
    <p className="desc"> {desc}</p>
   </TextSection>
  </StyledStepItem>
 );
};

export default StepItem;
