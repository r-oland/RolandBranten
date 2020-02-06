// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { HamburgerContext } from "../Layout/Layout";
// =========================

const Wrapper = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const Circle = styled(motion.div)`
  position: fixed;
  /* or absolute for non sticky */
  right: 20px;
  top: 10px;
  background: ${({ theme: { primary } }) => primary.s4};
  z-index: 151;
`;

const Burger = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 10px;
  height: 50px;
  width: 50px;
  z-index: 153;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Bar = styled(motion.div)`
  background: ${({ theme: { black } }) => black};
  height: 8%;
  width: 55%;

  margin-bottom: 4px;
  border-radius: 25px;
`;

const Top = styled(Bar)``;

const Center = styled(Bar)`
  width: 45%;
`;

const Bottom = styled(Bar)`
  margin-bottom: 0;
`;

export default function FluidHamburger() {
  const { menuState, changeMenu } = useContext(HamburgerContext);

  return (
    <Wrapper>
      <Circle
        animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            width: "130vw",
            height: "110vh",
            x: "15vw",
            y: "-50vh",
            borderRadius: "33% 37% 62% 38% / 82% 75% 25% 8% "
          },

          menuOpen: {
            width: 50,
            height: 50,
            x: 0,
            y: 0,
            borderRadius: "100% 100% 100% 100% / 100% 100% 100% 100% "
          }
        }}
        initial={false}
      ></Circle>
      <Burger onClick={changeMenu}>
        <Top
          animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
          variants={{
            menuClosed: {
              rotate: 45,
              y: 8
            },

            menuOpen: {
              rotate: 0,
              y: 0
            }
          }}
          initial={false}
        />
        <Center
          animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
          variants={{
            menuClosed: {
              x: 100
            },

            menuOpen: {
              x: 0
            }
          }}
          initial={false}
          ter
        />
        <Bottom
          animate={menuState === "closed" ? `menuOpen` : `menuClosed`}
          variants={{
            menuClosed: {
              rotate: 320,
              y: -8
            },

            menuOpen: {
              rotate: 0,
              y: 0
            }
          }}
          initial={false}
        />
      </Burger>
    </Wrapper>
  );
}
