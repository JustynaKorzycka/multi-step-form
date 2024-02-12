"use client";
import PLAN_DATA, { PlansEnum } from "@/data/planData";
import React from "react";
import { Form, FormContent } from "@/components/Form/Form.style";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import { useForm } from "react-hook-form";
import { useMultiFormContext } from "@/context/multistepFormContext";

import Radio from "../ui/Radio";
import Switcher from "../ui/Switcher";
import styled from "styled-components";

export interface IPlan {
 plan: PlansEnum;
 yearly: boolean;
}

const PlanForm = () => {
 const { handleNextStep, updateUserData, user } = useMultiFormContext();

 const { register, handleSubmit, formState, watch } = useForm<IPlan>({
  defaultValues: {
   plan: user.plan,
   yearly: user.yearly,
  },
 });
 const watchPlan = watch("plan");
 const watchYearly = watch("yearly");

 const formSubmit = (data: IPlan) => {
  updateUserData(data);
  handleNextStep();
 };

 return (
  <Form onSubmit={handleSubmit(formSubmit)}>
   <FormContent>
    <h1>{PLAN_DATA.title}</h1>
    <p className="topPar"> {PLAN_DATA.desc}</p>
    <RadioWrapper>
     {PLAN_DATA.plans.map((plan, index) => (
      <Radio
       key={index}
       type={plan.type}
       name={plan.name}
       icon={plan.icon}
       monthly={plan.monthly}
       yearly={plan.yearly}
       prom={plan.prom}
       register={register}
       planValue={watchPlan}
       yearlyValue={watchYearly}
      />
     ))}
    </RadioWrapper>
    <Switcher
     register={register}
     yearlyValue={watchYearly}
    />
   </FormContent>
   <ButtonsSection />
  </Form>
 );
};

export default PlanForm;

const RadioWrapper = styled.div`
 @media screen and (min-width: ${({ theme }) => theme.sizes.md}px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  min-height: 220px;
 }
`;
