const locales = {
  nl: {
    default: true,
    path: `nl`,
  },
  en: {
    path: `en`,
  },
};

removeTrailingSlash = (path) => (path === `/` ? path : path.replace(/\/$/, ``));

// lang context
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  Object.keys(locales).map((lang) => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`;

    const path = page.path;

    return createPage({
      ...page,

      path: removeTrailingSlash(localizedPath),

      context: {
        ...page.context,
        language: lang,
        oldPath: path,
      },
    });
  });
};

// Blog pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          title
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const blogPosts = result.data.allSanityBlog.nodes || [];
  blogPosts.forEach((edge) => {
    const title = edge.title;
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace("?", "")
      .slice(0, 200);

    const path = `/blog/${slug}`;

    createPage({
      path,
      component: require.resolve("./src/template"),
      context: { slug, title },
    });
  });
};
