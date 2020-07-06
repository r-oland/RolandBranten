// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const TopWrapper = styled.div`
  z-index: -1;
  transform: translateY(5vw);
  svg {
    width: 100vw;
  }
`;
const BottomWrapper = styled.div`
  z-index: -1;
  position: absolute;
  transform: translateY(-5vw);
  svg {
    width: 100vw;
    height: calc(400px + 7vw);
  }
`;

export function Top() {
  return (
    <TopWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1536 407.7"
        preserveAspectRatio="none"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              d="M1536,265.24V407.7H0V0S375.52,216.71,793.54,177.31,1536,265.24,1536,265.24Z"
              fill="#2b2b2b"
            />
          </g>
        </g>
      </svg>
    </TopWrapper>
  );
}
export function Bottom() {
  return (
    <BottomWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1536 468.63"
        preserveAspectRatio="none"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              d="M0,0H1536V439.68s-251.6,60.63-593.47,0C600.67,379.04,0,468.63,0,468.63Z"
              fill="#2b2b2b"
            />
          </g>
        </g>
      </svg>
    </BottomWrapper>
  );
}
