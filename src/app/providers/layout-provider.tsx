"use client";

import React, { useEffect } from "react";
import Header from "../components/layout-components/header";
import MainSection from "../components/mainSection";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <div>
      
      <Header />
      <MainSection>{children}</MainSection>
    </div>
  );
}
