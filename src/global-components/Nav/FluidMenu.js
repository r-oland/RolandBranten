// Components==============
import { motion } from "framer-motion";
import { useIntl } from "gatsby-plugin-intl";
import React, { useContext } from "react";
import styled from "styled-components";
import MTLink from "../../single-components/MTLink";
import { HamburgerContext } from "../Layout/Layout";
// =========================

const Hide = styled.div`
  @media screen and (min-width: 800px) {
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
  z-index: 152;

  margin-top: 15vh;

  button {
    margin-bottom: 5vh;
  }

  a {
    color: ${({ theme: { white } }) => white};
    font-size: 20px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
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
  const intl = useIntl();

  return (
    <Hide>
      <Menu
        animate={menuState === "open" ? `visible` : `hidden`}
        variants={{
          visible: {
            display: "flex"
          },

          hidden: {
            transitionEnd: {
              display: "none"
            }
          }
        }}
        initial={false}
      >
        <button onClick={changeMenu}>
          <MTLink to="/">{intl.formatMessage({ id: "nav1" })}</MTLink>
        </button>
        <button onClick={changeMenu}>
          <MTLink to="/">{intl.formatMessage({ id: "nav2" })}</MTLink>
        </button>
        <button onClick={changeMenu}>
          <MTLink to="/">{intl.formatMessage({ id: "nav3" })}</MTLink>
        </button>
        <button onClick={changeMenu}>
          <MTLink to="/">{intl.formatMessage({ id: "nav4" })}</MTLink>
        </button>
      </Menu>
      <Blur
        onClick={changeMenu}
        animate={menuState === "open" ? `visible` : `hidden`}
        variants={{
          visible: {
            opacity: 0.7,
            display: "block"
          },

          hidden: {
            opacity: 0,
            transitionEnd: {
              display: "none"
            }
          }
        }}
        initial={false}
      />
    </Hide>
  );
}
