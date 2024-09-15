"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Header from "../components/layout-components/header";
import MainSection from "../components/mainSection";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, user } = useUser();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      setShowHeader(true); 
    } else {
      setShowHeader(false);
    }
  }, [isLoaded, user]);

  return (
    <div>
      {showHeader && <Header />}
      <MainSection>{children}</MainSection>
    </div>
  );
}
