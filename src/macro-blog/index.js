// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled(Container)`
  margin-top: ${({ theme: { spacing } }) => spacing.s8};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
`;

export default function Blog({ content }) {
  const blogPosts = content.map((e, index) => {
    const title = e.title;
    const slug = e.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace("?", "")
      .slice(0, 200);

    return (
      <div key={index}>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </div>
    );
  });

  return <Wrapper>{blogPosts}</Wrapper>;
}
