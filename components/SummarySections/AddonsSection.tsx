import { useMultiFormContext } from "@/context/multistepFormContext";
import ADDONS_DATA from "@/data/addOnsData";

import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { ISummarySections, SectionType } from "../Form/SummaryForm";
import { Addon } from "./Addon";

const AddonsSection = ({ handleChangeTotalPrice }: ISummarySections) => {
 const { user } = useMultiFormContext();
 const currentAddonsData = useMemo(() => {
  return user.addons.map((addon) => {
   return ADDONS_DATA.inputs.find((input) => input.type === addon);
  });
 }, [user.addons]);

 useEffect(() => {
  let price = 0;
  currentAddonsData.forEach((addon) => {
   if (addon) {
    if (user.yearly) price += addon.priceYearly;
    else price += addon.priceMonthly;
   }
  });
  handleChangeTotalPrice(SectionType.addons, price);
 }, [currentAddonsData]);

 return (
  <StyledAddonsSection>
   {currentAddonsData.map((addon, index) => {
    if (addon)
     return (
      <Addon
       key={index}
       title={addon.label}
       price={
        user.yearly ? `$${addon.priceYearly}/yr` : `$${addon.priceMonthly}/mo`
       }
      />
     );
   })}
  </StyledAddonsSection>
 );
};

export default AddonsSection;

const StyledAddonsSection = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 1rem 0;
`;
