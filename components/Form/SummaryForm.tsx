"use client";

import { useForm } from "react-hook-form";
import { useMultiFormContext } from "@/context/multistepFormContext";
import ButtonsSection from "../ButtonsSection/ButtonsSection";
import SUMMARY_DATA from "@/data/summaryData";

import { Form, FormContent } from "@/components/Form/Form.style";
import styled from "styled-components";
import PlanSection from "../SummarySections/PlanSection";
import { useEffect, useState } from "react";
import AddonsSection from "../SummarySections/AddonsSection";
import TotalSection from "../SummarySections/TotalSection";

export enum SectionType {
 plan = "plan",
 addons = "addons",
}
export interface ISummarySections {
 handleChangeTotalPrice: (sectionType: SectionType, newPrice: number) => void;
}

const SummaryForm = () => {
 const { handleNextStep, user } = useMultiFormContext();
 const [totalPrice, setTotalPrice] = useState({ plan: 0, addons: 0 });
 const { handleSubmit } = useForm();

 const handleChangeTotalPrice = (sectionType: SectionType, price: number) => {
  if (sectionType === SectionType.plan)
   setTotalPrice((prev) => ({ ...prev, plan: price }));
  else if (sectionType === SectionType.addons)
   setTotalPrice((prev) => ({ ...prev, addons: price }));
 };

 const formSubmit = () => {
  handleNextStep();
 };

 return (
  <Form onSubmit={handleSubmit(formSubmit)}>
   <FormContent>
    <h1>{SUMMARY_DATA.title}</h1>
    <p className="topPar"> {SUMMARY_DATA.desc}</p>
    <SummaryWrapper>
     <PlanSection handleChangeTotalPrice={handleChangeTotalPrice} />
     <AddonsSection handleChangeTotalPrice={handleChangeTotalPrice} />
     <TotalSection
      yearly={user.yearly}
      price={totalPrice.addons + totalPrice.plan}
     />
    </SummaryWrapper>
   </FormContent>

   <ButtonsSection />
  </Form>
 );
};

export default SummaryForm;

const SummaryWrapper = styled.div`
 padding: 1rem;
 border-radius: ${({ theme }) => theme.borderRadius.xl};
 background-color: ${({ theme }) => theme.colors.veryLightGrey};
 @media screen and (min-width: ${({ theme }) => theme.sizes.sm}px) {
  padding: 1rem 1.5rem;
 }
`;
