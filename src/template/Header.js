// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Relative = styled.div`
  position: relative;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
`;

const Image = styled(Img)`
  img {
    filter: blur(2px) brightness(0.4);
  }
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  color: ${({ theme: { white } }) => white};
  text-align: center;
`;

const Title = styled.h2``;

const Flex = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  transform: translateY(10px);

  @media screen and (min-width: 350px) {
    display: flex;
  }

  strong {
    color: ${({ theme: { gray } }) => gray.s1};
    font-size: 16px;

    @media screen and (min-width: 400px) {
      font-size: 19px;
    }
  }

  div {
    height: 17.5px;
    width: 2.5px;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    background: ${({ theme: { primary } }) => primary.s4};
    margin: 0 0.5em;
  }

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    font-size: 16px;

    @media screen and (min-width: 400px) {
      font-size: 19px;
    }
  }
`;

export default function Header({ content }) {
  const { title, readTime, date, image } = content;

  return (
    <>
      <Relative>
        <Image fluid={image} alt={title} />
        <Info>
          <Title>{title}</Title>
          <Flex>
            <strong className="date">{date}</strong>
            <div />
            <p className="readTime">{readTime} mins read</p>
          </Flex>
        </Info>
      </Relative>
    </>
  );
}
