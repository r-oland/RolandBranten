// Components==============
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import SForm from "../../single-components/SForm";
import TransitionEffect from "../../single-components/TransitionEffect";
import usePersistedState from "../../single-components/usePersistedState";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

export const HamburgerContext = React.createContext();
export const ModalContext = React.createContext();
export const FaqContext = React.createContext();

export default function Layout({ children, page, display }) {
  const [menuState, setMenuState] = useState("closed");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [FAQSelected, setFAQSelected] = usePersistedState(`FAQSelected`, null);

  useEffect(() => {
    console.log(FAQSelected);
  }, [FAQSelected]);

  const changeMenu = () => {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  };

  const handleChange = () => {
    modalIsOpen === true ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  const contextValue = {
    menuState,
    changeMenu
  };

  const modalValue = {
    modalIsOpen,
    handleChange
  };

  const faqValue = {
    FAQSelected,
    setFAQSelected
  };

  return (
    <ThemeProvider theme={Variables}>
      <HamburgerContext.Provider value={contextValue}>
        <ModalContext.Provider value={modalValue}>
          <FaqContext.Provider value={faqValue}>
            <IEWarning />
            <SForm />
            <Nav page={page} />
            <TransitionEffect page={page}>
              {children}
              <Footer page={page} display={display} />
            </TransitionEffect>
            <GlobalStyles />
          </FaqContext.Provider>
        </ModalContext.Provider>
      </HamburgerContext.Provider>
    </ThemeProvider>
  );
}
