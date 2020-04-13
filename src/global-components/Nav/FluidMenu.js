// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import intl from "../../intl/intl.js";
import MTLink from "../../micro-components/MTLink";
import {
  FaqContext,
  HamburgerContext,
  LocaleContext,
  ModalContext,
} from "../Layout/Layout";
// =========================

const Hide = styled.div`
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const Menu = styled(motion.div)`
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 154;

  margin-top: 12vh;

  button {
    margin-bottom: 4vh;
  }

  .active {
    color: ${({ theme: { white } }) => white};
  }

  a,
  #contact {
    font-size: 20px;
    font-family: Poppins;
    font-weight: 700;
  }
`;

const Blur = styled(motion.div)`
  cursor: default;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 149;
  background-color: black;
  top: 0;
  left: 0;
`;

export default function FluidMenu() {
  const { menuState, changeMenu } = useContext(HamburgerContext);
  const { handleChange } = useContext(ModalContext);
  const { setFAQSelected } = useContext(FaqContext);
  const lang = useContext(LocaleContext);

  return (
    <Hide>
      <Menu
        animate={menuState === "open" ? `visible` : `hidden`}
        variants={{
          visible: {
            display: "flex",
          },

          hidden: {
            transitionEnd: {
              display: "none",
            },
          },
        }}
        initial={false}
      >
        <button onClick={changeMenu}>
          <MTLink to="/" activeClassName="active">
            {intl[lang].nav0}
          </MTLink>
        </button>
        <button onClick={changeMenu}>
          <MTLink to="/about" activeClassName="active">
            {intl[lang].nav1}
          </MTLink>
        </button>
        <button onClick={changeMenu}>
          <MTLink to="/work" activeClassName="active">
            {intl[lang].nav2}
          </MTLink>
        </button>
        <button
          onClick={() => {
            changeMenu();
            setFAQSelected(null);
          }}
        >
          <MTLink to="/faq" activeClassName="active">
            {intl[lang].nav3}
          </MTLink>
        </button>
        <button
          id="contact"
          onClick={() => {
            handleChange();
            changeMenu();
          }}
        >
          {intl[lang].nav4}
        </button>
      </Menu>
      <Blur
        onClick={changeMenu}
        animate={menuState === "open" ? `visible` : `hidden`}
        variants={{
          visible: {
            opacity: 0.7,
            display: "block",
          },

          hidden: {
            opacity: 0,
            transitionEnd: {
              display: "none",
            },
          },
        }}
        initial={false}
      />
    </Hide>
  );
}
