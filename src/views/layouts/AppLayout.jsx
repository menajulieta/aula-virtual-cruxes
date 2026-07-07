import React from "react";
import { Outlet } from "react-router";
import { HeaderLayout } from "../components/HeaderLayout";
import { FooterLayout } from "../components/FooterLayout";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
};
