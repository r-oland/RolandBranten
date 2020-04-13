// Components==============
import { motion } from "framer-motion";
import { Container } from "mixins";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import intl from "../../intl/intl.js";
import LanguageSwitch from "../../micro-components/LanguageSwitch";
import MTLink from "../../micro-components/MTLink";
import {
  FaqContext,
  HamburgerContext,
  LocaleContext,
  ModalContext,
  ObserverContext,
} from "../Layout/Layout";
import FluidHamburger from "./FluidHamburger";
import FluidMenu from "./FluidMenu";
// =========================

const NavWrapper = styled(motion.div)`
  z-index: 153;
  position: absolute;
  width: 100%;
  transition: 0.4s;

  @media screen and (min-width: 850px) {
    position: fixed;
    background: ${({ theme: { white }, inView }) =>
      inView === true ? white : "none"};
    box-shadow: ${({ theme: { shadow }, inView }) =>
      inView === true ? shadow.small : "none"};
  }
`;

const Logo = styled.svg`
  width: 160px;
  transform: translateY(3px);

  @media screen and (min-width: 850px) {
    width: 190px;
    transform: translateY(0);
  }
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing.s9};
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 850px) {
    display: flex;
  }

  li {
    cursor: pointer;
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.3s;

    a,
    button {
      transition: 0.2s;
      &:hover {
        color: ${({ theme: { primary }, inView, path }) =>
          inView === false && (path === "/" || path === "/en")
            ? `white`
            : primary.s7};
      }
    }
  }

  button {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const Flex = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
`;

export default function Nav({ path, oldPath }) {
  const { inView, inView2 } = useContext(ObserverContext);
  const { menuState } = useContext(HamburgerContext);
  const themeContext = useContext(ThemeContext);
  const { handleChange } = useContext(ModalContext);
  const { setFAQSelected } = useContext(FaqContext);
  const locale = useContext(LocaleContext);

  return (
    <div>
      <NavWrapper inView={inView}>
        <FlexContainer>
          <MTLink to="/">
            <Logo
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 178.216 13.583"
            >
              <g
                fill={
                  menuState === "open"
                    ? themeContext.primary.s4
                    : themeContext.gray.s9
                }
              >
                <path d="M4.977.19c3.191 0 4.787 1.843 4.787 4.066a3.83 3.83 0 01-3.02 3.818l3.172 5.376H6.84L3.913 8.283H2.66v5.167H0V.19zm-.095 2.204H2.659v3.894h2.223c1.482 0 2.147-.778 2.147-1.976 0-1.177-.665-1.918-2.147-1.918zM19.625 13.583a6.664 6.664 0 01-6.8-6.8A6.66 6.66 0 0119.625 0a6.622 6.622 0 016.783 6.782 6.638 6.638 0 01-6.783 6.801zm0-2.374c2.394 0 4.047-1.73 4.047-4.427s-1.653-4.388-4.047-4.388c-2.412 0-4.065 1.691-4.065 4.388s1.653 4.427 4.065 4.427zM32.337.19v11.152h4.37v2.108h-7.03V.19zM47.82 10.924h-5.28l-.874 2.526h-2.792L43.642.17h3.096l4.768 13.28h-2.811zm-2.64-7.675l-1.918 5.547h3.837zM65.928.17v13.28h-2.66l-6.023-9.1v9.1h-2.659V.17h2.66l6.022 9.12V.17zM81.47 6.839c0 4.009-2.755 6.611-6.991 6.611h-4.636V.19h4.635c4.237 0 6.991 2.622 6.991 6.649zm-7.087 4.351c2.793 0 4.37-1.596 4.37-4.35s-1.577-4.408-4.37-4.408h-1.88v8.758z" />
              </g>
              <g
                fill={
                  menuState === "open"
                    ? themeContext.primary.s4
                    : themeContext.gray.s9
                }
              >
                <path d="M96.351 13.14h-5.42V.573h5.186c2.629 0 4.087 1.368 4.087 3.24a2.897 2.897 0 01-2.143 2.88 3.048 3.048 0 012.431 3.044c0 1.999-1.53 3.403-4.14 3.403zm-.594-10.533h-2.305v3.151h2.305c1.188 0 1.872-.54 1.872-1.566 0-1.009-.684-1.585-1.872-1.585zm.18 5.096h-2.485v3.384h2.539c1.224 0 1.945-.593 1.945-1.656 0-1.08-.775-1.728-1.999-1.728zM108.447.573c3.025 0 4.537 1.746 4.537 3.852a3.63 3.63 0 01-2.863 3.62l3.007 5.095h-2.917l-2.773-4.897h-1.188v4.897h-2.521V.573zm-.09 2.088h-2.107v3.691h2.106c1.405 0 2.035-.738 2.035-1.872 0-1.117-.63-1.82-2.035-1.82zM124.197 10.746h-5.005l-.829 2.394h-2.646L120.236.554h2.935l4.519 12.586h-2.665zm-2.503-7.275l-1.818 5.258h3.637zM141.352.554V13.14h-2.52l-5.708-8.625v8.625h-2.521V.554h2.52l5.708 8.643V.554zM144.39.573h9.219v2.034h-3.349V13.14h-2.52V2.607h-3.35zM163.959 2.607h-4.771v3.151h4.23v1.998h-4.23v3.331h4.771v2.053h-7.293V.554h7.293zM178.216.554V13.14h-2.521l-5.708-8.625v8.625h-2.52V.554h2.52l5.708 8.643V.554z" />
              </g>
            </Logo>
          </MTLink>

          <Flex>
            <MenuItems inView={inView} path={path}>
              <li>
                <MTLink to="/about">{intl[locale].nav1}</MTLink>
              </li>
              <li>
                <MTLink to="/work">{intl[locale].nav2}</MTLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    setFAQSelected(null);
                  }}
                >
                  <MTLink to="/faq">{intl[locale].nav3}</MTLink>
                </button>
              </li>
              <li>
                <button onClick={handleChange}>{intl[locale].nav4}</button>
              </li>
            </MenuItems>
            <LanguageSwitch inView2={inView2} path={oldPath} />
          </Flex>
        </FlexContainer>
      </NavWrapper>
      <FluidHamburger />
      <FluidMenu />
    </div>
  );
}
