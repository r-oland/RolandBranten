// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  @media screen and (min-width: 1100px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing.s8} 0 ${spacing.s8} ${spacing.s8}`};
    min-height: 295px;
  }

  .title {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }
  .subTitle {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
    color: ${({ theme: { gray } }) => gray.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s5};

  @media screen and (min-width: 1100px) {
    margin-bottom: 0;
  }

  strong {
    color: ${({ theme: { gray } }) => gray.s9};
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
    font-size: 15px;
  }
`;

export default function Info({ title, subTitle, date, readTime }) {
  return (
    <Wrapper>
      <h3 className="title">{title}</h3>
      <p className="subTitle">{subTitle}</p>
      <Flex>
        <strong className="date">{date}</strong>
        <div />
        <p className="readTime">{readTime} mins read</p>
      </Flex>
    </Wrapper>
  );
}
