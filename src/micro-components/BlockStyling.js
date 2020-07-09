import styled from "styled-components";

export const BlockStyling = styled.div`
  h2 :first-child,
  h4 :first-child {
    margin-top: 0 !important;
  }

  h2 {
    margin-top: ${({ theme: { spacing } }) => spacing.s5};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  }

  h4 {
    margin-top: ${({ theme: { spacing } }) => spacing.s4};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  }

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
