"use client";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import StepSection from "@/components/StepSection/StepSection";

import Form from "@/components/Form/Form";

export default function Home() {
 return (
  <ContentWrapper>
   <div className="container">
    <StepSection />
    <Form />
   </div>
  </ContentWrapper>
 );
}
