"use client";

import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import Form from "@/components/Form/Form";
import StepSection from "@/components/StepSection/StepSection";
import { useState } from "react";

export default function Home() {
 const [currentStep, setCurrentStep] = useState(0);

 return (
  <ContentWrapper>
   <div className="container">
    <StepSection currentStep={currentStep} />
    <Form />
   </div>
  </ContentWrapper>
 );
}
