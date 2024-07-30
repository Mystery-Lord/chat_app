import React from "react";
import Header from "../components/layout-components/header";
import MainSection from "../components/layout-components/mainSection";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <Header/>
    <MainSection>
      {children}
    </MainSection>
    </div>;
}
