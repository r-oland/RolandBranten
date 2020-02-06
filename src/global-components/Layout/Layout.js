// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import TransitionEffect from "../../single-components/TransitionEffect";
import GlobalStyles from "../../style/GlobalStyles";
import { OverFlowFix } from "../../style/Mixins";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <OverFlowFix>
        <Nav />
        <TransitionEffect>
          {children}
          <Footer />
        </TransitionEffect>
      </OverFlowFix>
      <GlobalStyles />
    </ThemeProvider>
  );
}
