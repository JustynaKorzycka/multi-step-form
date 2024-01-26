import React from "react";
import { StyledContentWrapper } from "./ContentWrapper.style";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
 return <StyledContentWrapper>{children}</StyledContentWrapper>;
};

export default ContentWrapper;
