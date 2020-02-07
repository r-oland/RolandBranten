// Components==============
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import TransitionEffect from "../../single-components/TransitionEffect";
import GlobalStyles from "../../style/GlobalStyles";
import { OverFlowFix } from "../../style/Mixins";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

export const HamburgerContext = React.createContext();

export default function Layout({ children, page, display }) {
  const [menuState, setMenuState] = useState("closed");

  const changeMenu = () => {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  };

  const contextValue = {
    menuState,
    changeMenu
  };

  return (
    <ThemeProvider theme={Variables}>
      <HamburgerContext.Provider value={contextValue}>
        <IEWarning />
        <OverFlowFix>
          <Nav />
          <TransitionEffect page={page}>
            {children}
            <Footer page={page} display={display} />
          </TransitionEffect>
        </OverFlowFix>
        <GlobalStyles />
      </HamburgerContext.Provider>
    </ThemeProvider>
  );
}
