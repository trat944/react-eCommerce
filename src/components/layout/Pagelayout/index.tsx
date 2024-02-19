import { FC, PropsWithChildren } from "react";
import { Navbar } from "../Header";
import { Footer } from "../Footer";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

