import React, { ReactNode } from "react";
import { Footer } from "../../organisms/footer/Footer";
import { Link } from "../../atoms/link/Link";
import { SiteHeader } from "../siteHeader/SiteHeader";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 mt-16 lg:mt-20">
        {children}
      </main>
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
