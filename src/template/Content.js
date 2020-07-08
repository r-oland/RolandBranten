// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
// =========================

const Padding = styled.div`
  padding: ${({ theme: { spacing } }) => `0 ${spacing.s5} ${spacing.s5}`};

  @media screen and (min-width: 700px) {
    padding: ${({ theme: { spacing } }) => `0 ${spacing.s9} ${spacing.s9}`};
  }
`;
const BlockStyling = styled.div`
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }

  blockquote::before {
    content: open-quote;
  }

  blockquote::after {
    content: close-quote;
  }

  blockquote {
    quotes: "“" "”" "‘" "’";
  }

  ul {
    margin-left: ${({ theme: { spacing } }) => spacing.s7};

    li {
      list-style: initial;
    }
  }

  ol {
    margin-left: ${({ theme: { spacing } }) => spacing.s7};

    li {
      list-style: upper-greek;
    }
  }

  a {
    cursor: pointer;
    border-bottom: 1px solid
      ${({ theme: { primary } }) => primary.s4.replace("1)", "0.3)")};
    box-shadow: 0px -4px 0px ${({ theme: { primary } }) =>
        primary.s4.replace("1)", "0.3)")} inset;
    transition: 0.2s;

    &:hover {
      border-bottom: 1px solid
        ${({ theme: { primary } }) => primary.s4.replace("1)", "0)")};
      box-shadow: 0px -4px 0px ${({ theme: { primary } }) =>
          primary.s4.replace("1)", "0)")} inset;
      background-color: ${({ theme: { primary } }) =>
        primary.s4.replace("1)", "0.3)")};
    }
  }
`;

export default function Content({ content }) {
  return (
    <Padding>
      <BlockStyling>
        <Block content={content} />
      </BlockStyling>
    </Padding>
  );
}
