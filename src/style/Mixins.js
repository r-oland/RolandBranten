import styled from "styled-components";

// FLex unit

export function flexUnit(amount, min, max, unit = "vw", prop = "font-size") {
  const minBreakpoint = (min / amount) * 100;
  const maxBreakpoint = max ? (max / amount) * 100 : false;
  const dimension = unit === "vw" ? "width" : "height";

  return `
     @media (max-${dimension}: ${minBreakpoint}px) {
       ${prop}: ${min}px;
     }
 
     ${
       max
         ? `
       @media (min-${dimension}: ${maxBreakpoint}px) {
         ${prop}: ${max}px;
       }
     `
         : ""
     }
 
     ${prop}: ${amount}${unit}
   `;
}

// overflow fix

export const OverFlowFix = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

// Container

export const Container = styled.div`
  margin: 0 5%;

  @media screen and (min-width: 768px) {
    margin: 0 7%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 9%;
  }
`;

// Font sizes

export const Xs = styled.p`
  font-size: 14px;
`;

export const S = styled.p`
  ${flexUnit(2.5, 15, 16, "vw", "font-size")};
`;

export const M = styled.p`
  ${flexUnit(2.5, 16, 17, "vw", "font-size")};
`;

export const L = styled.p`
  ${flexUnit(2.5, 18, 19, "vw", "font-size")};
`;

export const H1 = styled.p`
  font-family: Poppins;
  ${flexUnit(4, 40, 55, "vw", "font-size")};
  font-weight: 700;
`;

export const H2 = styled.p`
  font-family: Poppins;
  ${flexUnit(3, 25, 38, "vw", "font-size")};
  font-weight: 700;
`;

export const H3 = styled.p`
  font-family: Poppins;
  ${flexUnit(2, 20, 35, "vw", "font-size")};
  font-weight: 700;
`;

// styled underline

export const StyledUnderline = styled.span`
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
`;

// Button

export const Button = styled.button`
  ${flexUnit(2.5, 18, 19, "vw", "font-size")};
  background-color: ${({ theme: { primary } }) => primary.s4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s6}`};
  display: inline-block;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.small};

  &:hover {
    background-color: ${({ theme: { primary } }) => primary.s5};
    box-shadow: ${({ theme: { doubleShadow } }) => doubleShadow.small};
    transition: all 0.2s ease-in-out;
  }
`;
