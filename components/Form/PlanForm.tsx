"use client";
import PLAN_DATA, { PlansEnum } from "@/data/planData";
import React, { useEffect, useMemo, useState } from "react";
import { Form } from "@/components/Form/Form.style";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import { useForm } from "react-hook-form";
import { useMultiFormContext } from "@/context/multistepFormContext";

import Radio from "../ui/Radio";
import Switcher from "../ui/Switcher";

export interface IPlan {
 plan: PlansEnum;
 yearly: boolean;
}

const PlanForm = () => {
 const { handleNextStep, updateUserData, user } = useMultiFormContext();

 const {
  register,
  handleSubmit,
  formState: { errors },
  watch,
 } = useForm<IPlan>({
  defaultValues: {
   plan: user.plan,
   yearly: false,
  },
 });
 const watchPlan = watch("plan");
 const watchYearly = watch("yearly");

 const formSubmit = (data: IPlan) => {
  console.log(data);
  updateUserData(data);
  handleNextStep();
 };

 return (
  <Form onSubmit={handleSubmit(formSubmit)}>
   <h1>{PLAN_DATA.title}</h1>
   <p className="topPar"> {PLAN_DATA.desc}</p>

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
   <Switcher
    register={register}
    yearlyValue={watchYearly}
   />
   <ButtonsSection />
  </Form>
 );
};

export default PlanForm;
