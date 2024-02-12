import { useMultiFormContext } from "@/context/multistepFormContext";
import PLAN_DATA from "@/data/planData";

import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { ISummarySections, SectionType } from "../Form/SummaryForm";

const PlanSection = ({ handleChangeTotalPrice }: ISummarySections) => {
 const { user, handleChangeToPlan } = useMultiFormContext();
 const currentPlanData = useMemo(() => {
  return PLAN_DATA.plans.find((plan) => plan.type === user.plan);
 }, [user.plan]);

 const timePeriod = useMemo(() => {
  if (user.yearly) return "Yearly";
  return "Monthly";
 }, [user.yearly]);

 const planPrice = useMemo(() => {
  if (user.yearly) return currentPlanData?.yearly;
  return currentPlanData?.monthly;
 }, [currentPlanData, user.yearly]);

 useEffect(() => {
  const price = planPrice ? planPrice : 0;
  handleChangeTotalPrice(SectionType.plan, price);
 }, [planPrice]);

 return (
  <StyledPlanSection>
   <div className="left">
    <h2>{`${currentPlanData?.name} (${timePeriod}) `}</h2>
    <button
     className="textBtn"
     onClick={handleChangeToPlan}
    >
     Change
    </button>
   </div>
   <span className="price">{`$${planPrice}/${user.yearly ? "yr" : "mo"}`}</span>
  </StyledPlanSection>
 );
};

export default PlanSection;

const StyledPlanSection = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-bottom: 1.5rem;
 border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
 .left {
  display: flex;
  flex-direction: column;

  .textBtn {
   padding: 0;
   background-color: transparent;
   border: none;
   align-self: flex-start;
   text-decoration: underline;
   color: ${({ theme }) => theme.colors.grey};
   text-underline-position: under;
   cursor: pointer;

   &:hover {
    color: ${({ theme }) => theme.colors.purple};
   }
  }
 }
 h2 {
  font-size: 1rem;
 }
 .price {
  font-weight: bold;
 }
`;
