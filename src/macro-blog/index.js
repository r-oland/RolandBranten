// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

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
