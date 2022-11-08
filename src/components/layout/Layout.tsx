import React, { ReactNode } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Link } from "../link/Link";

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
      <Footer
        content={
          <p className="text-sm text-center">
            Copyright &copy; {new Date().getFullYear()}. Created by Grzegorz
            Pokorski. Images belongs to{" "}
            <Link href="https://www.logitech.com/">Logitech</Link>.
          </p>
        }
      />
    </>
  );
};
