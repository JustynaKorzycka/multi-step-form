import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import ThemeClient from "@/lib/ThemeClient";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
 title: "Multi step form",
 description: "Multi step form challenge from Fronted Mentor",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <StyledComponentsRegistry>
    <ThemeClient>
     <GlobalStyles />
     <body className={ubuntu.className}>{children}</body>
    </ThemeClient>
   </StyledComponentsRegistry>
  </html>
 );
}
