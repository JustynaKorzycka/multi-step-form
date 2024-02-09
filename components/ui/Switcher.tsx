import styled from "styled-components";
import { IPlan } from "../Form/PlanForm";
import { UseFormRegister } from "react-hook-form";

interface ISwitcherProps {
 register: UseFormRegister<IPlan>;
 yearlyValue: boolean;
}
const Switcher = ({ register, yearlyValue }: ISwitcherProps) => {
 return (
  <SwitcherContainer>
   <span className={!yearlyValue ? "bold" : ""}>Monthly</span>
   <StyledSwitcher>
    <input
     type="checkbox"
     id="toggle"
     {...register("yearly")}
    />
    <label
     htmlFor="toggle"
     className="slider"
    />
   </StyledSwitcher>
   <span className={yearlyValue ? "bold" : ""}>Yearly</span>
  </SwitcherContainer>
 );
};

export default Switcher;

const SwitcherContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 24px;

 span {
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey};
  &.bold {
   color: ${({ theme }) => theme.colors.denim};
  }
 }
`;

const StyledSwitcher = styled.div`
 position: relative;
 width: 38px;
 height: 20px;
 .slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.denim};
  border-radius: 34px;
  cursor: pointer;
  transition: 0.4s;
 }

 .slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
 }

 input[type="checkbox"] {
  display: none;
 }

 input[type="checkbox"]:checked + .slider:before {
  transform: translate(18px, -50%);
 }
`;
