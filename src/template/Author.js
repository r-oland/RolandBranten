// Components==============
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import MTLink from "../micro-components/MTLink";
import { StyledUnderline } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s8};

  p,
  strong {
    margin-bottom: 0 !important;
  }
`;

const Bar = styled.div`
  height: 1px;
  width: 90%;
  margin: 0 auto;
  background: ${({ theme: { black } }) => black.replace("1)", "0.6)")};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
  margin-left: 5%;
`;

const Circle = styled.div`
  border-radius: 100%;
  overflow: hidden;
  width: 90px;
  height: 90px;
`;

const Image = styled(Img)`
  width: 90px;

  position: relative;
  left: 0;
  bottom: 0;
`;

export default function Author() {
  const data = useStaticQuery(graphql`
    query Picture {
      sanityHome {
        chat {
          headshot2 {
            asset {
              fluid(maxWidth: 150) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const image = data.sanityHome.chat.headshot2.asset.fluid;

  return (
    <Wrapper>
      <Bar />
      <Flex>
        <Circle>
          <Image fluid={image} alt="Roland-headshot" />
        </Circle>
        <div style={{ marginLeft: "1em" }}>
          <p>Written by:</p>
          <MTLink to="/about">
            <StyledUnderline>Roland Branten </StyledUnderline>
          </MTLink>
        </div>
      </Flex>
    </Wrapper>
  );
}
