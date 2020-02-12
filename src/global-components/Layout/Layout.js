// Components==============
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { ThemeProvider } from "styled-components";
import SForm from "../../single-components/SForm";
import TransitionEffect from "../../single-components/TransitionEffect";
import usePersistedState from "../../single-components/usePersistedState";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

const ObserverStyle = styled.div`
  position: absolute;
  bottom: 0;
`;

const ObserverRef = styled(ObserverStyle)`
  height: calc(100% - 101vh);
`;

const ObserverRef2 = styled(ObserverStyle)`
  height: calc(100% - 101vh);
`;

export const HamburgerContext = React.createContext();
export const ModalContext = React.createContext();
export const FaqContext = React.createContext();
export const ObserverContext = React.createContext();

export default function Layout({ children, page, display }) {
  const [menuState, setMenuState] = useState("closed");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [FAQSelected, setFAQSelected] = usePersistedState(`FAQSelected`, null);
  const [ref, inView] = useInView({ threshold: 0 });
  const [ref2, inView2] = useInView({ threshold: 0 });

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

  const observerValue = {
    inView,
    inView2
  };

  return (
    <ThemeProvider theme={Variables}>
      <HamburgerContext.Provider value={contextValue}>
        <ModalContext.Provider value={modalValue}>
          <FaqContext.Provider value={faqValue}>
            <ObserverContext.Provider value={observerValue}>
              <ObserverRef ref={ref} />
              <ObserverRef2 ref={ref2} />
              <IEWarning />
              <SForm />
              <Nav page={page} />
              <TransitionEffect page={page}>
                {children}
                <Footer page={page} display={display} />
              </TransitionEffect>
              <GlobalStyles />
            </ObserverContext.Provider>
          </FaqContext.Provider>
        </ModalContext.Provider>
      </HamburgerContext.Provider>
    </ThemeProvider>
  );
}
