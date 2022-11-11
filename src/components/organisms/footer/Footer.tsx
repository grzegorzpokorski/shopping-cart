import React, { ReactNode } from "react";

type FooterProps = {
  content: ReactNode;
};

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="bg-white border-t-2 border-zinc-200 py-8">
      <div className="container px-4 mx-auto">{content}</div>
    </footer>
  );
};
