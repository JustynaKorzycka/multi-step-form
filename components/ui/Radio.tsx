import Image from "next/image";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ico from "@/public/images/icon-arcade.svg";
import { PlansEnum } from "@/data/planData";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IPlan } from "../Form/PlanForm";
import { UseFormRegister } from "react-hook-form";

interface IRadioProps {
 type: PlansEnum;
 name: string;
 icon: StaticImport;
 monthly: number;
 yearly: number;
 prom: string;
 register: UseFormRegister<IPlan>;
 planValue: PlansEnum;
 yearlyValue: boolean;
}

const Radio = ({
 type,
 name,
 icon,
 monthly,
 yearly,
 prom,
 register,
 planValue,
 yearlyValue,
}: IRadioProps) => {
 const isChecked = useMemo(() => {
  if (planValue === type) return true;
  else return false;
 }, [planValue, type]);
 return (
  <StyledRadio>
   <label htmlFor={type}>
    <LabelContent $isChecked={isChecked}>
     <Image
      src={icon}
      alt=""
     />
     <Description>
      <span className="title">{name}</span>
      <span className="price">
       {yearlyValue ? `$${yearly}/yr` : `$${monthly}/yr`}
      </span>
      {yearlyValue && <span className="prom">{prom}</span>}
     </Description>
    </LabelContent>

    <input
     type="radio"
     value={type}
     id={type}
     {...register("plan")}
     name="plan"
    />
   </label>
  </StyledRadio>
 );
};

export default Radio;

const StyledRadio = styled.div`
 position: relative;

 input {
  visibility: hidden;
 }

 label {
  cursor: pointer;
 }
`;

interface ILabelProps {
 $isChecked: boolean;
}

const LabelContent = styled.div<ILabelProps>`
 display: flex;
 gap: 1rem;
 border: 2px solid
  ${({ theme, $isChecked }) =>
   $isChecked ? theme.colors.purple : theme.colors.lightGrey};
 padding: 1rem;
 border-radius: ${({ theme }) => theme.borderRadius.lg};

 &:hover {
  border-color: ${({ theme }) => theme.colors.purple};
 }
`;

const Description = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
 .title {
  font-weight: bold;
  font-size: 1rem;
 }
 .price {
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.875rem;
 }
 .prom {
  font-size: 0.875rem;
 }
`;
