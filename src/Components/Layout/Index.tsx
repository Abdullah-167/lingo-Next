import React, { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MiniNav from "./MiniNav";
import ProgressButton from "./ProgressButton";

interface LayoutCpm {
  children: any;
}

const Layout: FC<LayoutCpm> = ({ children }: any) => {
  return (
    <>
      <MiniNav />
      <Navbar />
      {/* <ProgressBar /> */}
      <ProgressButton />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
