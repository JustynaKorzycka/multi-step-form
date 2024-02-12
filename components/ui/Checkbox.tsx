import { AddonsEnum } from "@/data/addOnsData";
import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { IAddons } from "../Form/AddOnsForm";
import { useMultiFormContext } from "@/context/multistepFormContext";

interface ICheckboxProps {
 type: AddonsEnum;
 label: string;
 desc: string;
 priceMonthly: number;
 priceYearly: number;
 register: UseFormRegister<IAddons>;
}

const Checkbox = ({
 type,
 label,
 desc,
 priceMonthly,
 priceYearly,
 register,
}: ICheckboxProps) => {
 const { user } = useMultiFormContext();

 return (
  <StyledCheckbox>
   <label htmlFor={type}>
    <Left>
     <span className="title">{label}</span>
     <span className="desc">{desc}</span>
    </Left>

    <span className="price">
     {" "}
     {user.yearly ? `+$${priceYearly}/yr` : `+$${priceMonthly}/mo`}
    </span>
   </label>
   <input
    type="checkbox"
    value={type}
    {...register("addons")}
    id={type}
   />
  </StyledCheckbox>
 );
};

export default Checkbox;

const StyledCheckbox = styled.div`
 display: flex;
 flex-direction: row-reverse;
 justify-content: start;
 align-items: center;
 gap: 1rem;
 padding: 11px 1rem;
 border-radius: ${({ theme }) => theme.borderRadius.lg};
 border: 2px solid ${({ theme }) => theme.colors.lightGrey};
 margin-bottom: 1rem;

 label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  cursor: pointer;

  .price {
   color: ${({ theme }) => theme.colors.purple};
   font-size: 14px;
  }
 }
 input {
  width: 20px;
  height: 20px;
  cursor: pointer;
 }

 &:hover {
  border-color: ${({ theme }) => theme.colors.purple};
 }

 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  padding: 18px 24px;
 }
`;

const Left = styled.div`
 display: flex;
 flex-direction: column;
 max-width: 220px;
 gap: 8px;

 .title {
  font-weight: bold;
 }
 .desc {
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
 }
`;
