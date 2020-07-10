// Components==============
import React from "react";
import styled from "styled-components";
import Technologie from "./Technologie";
// =========================

export const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};

  h3 {
    color: ${({ theme: { white } }) => white};
    font-size: 19px;
    text-align: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};

    @media screen and (min-width: 500px) {
      margin-bottom: ${({ theme: { spacing } }) => spacing.s7};
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: ${({ theme: { spacing } }) => spacing.s7};
  width: 80vw;

  @media screen and (min-width: 700px) {
    width: 30vw;
  }

  @media screen and (min-width: 1300px) {
    width: 16vw;
    max-width: 250px;
  }
`;

const Bar = styled.div`
  background: white;
  width: 100%;
  height: 60%;
  transform: translateY(5%);
  align-self: center;
  display: none;

  @media screen and (min-width: 700px) {
    display: ${({ index }) => (index !== 1 && index !== 3 ? "block" : "none")};
  }
  @media screen and (min-width: 1300px) {
    display: ${({ index }) => index !== 3 && "block"};
  }
`;

export default function DevTech({ content }) {
  const languages = content.filter((e) => e.category === "language");
  const libAndFrameworks = content.filter(
    (e) => e.category === "library/framework"
  );
  const platforms = content.filter((e) => e.category === "platform");
  const tools = content.filter((e) => e.category === "tool");

  const arr = [
    { title: "Languages", tech: languages },
    { title: "Libraries & frameworks", tech: libAndFrameworks },
    { title: "Platforms", tech: platforms },
    { title: "Tools", tech: tools },
  ];

  const technologies = arr.map((e, index) => {
    const techCollection = e.tech.map((e, index) => {
      return <Technologie key={index} icon={e.icon.asset.url} name={e.name} />;
    });

    return (
      <React.Fragment key={index}>
        <Wrapper>
          <h3>{e.title}</h3>
          <Grid>{techCollection}</Grid>
        </Wrapper>
        <Bar index={index} />
      </React.Fragment>
    );
  });

  return <>{technologies}</>;
}
