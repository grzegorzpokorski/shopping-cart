import React, { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-4 mt-16 lg:mt-20">{children}</main>
    </>
  );
};
