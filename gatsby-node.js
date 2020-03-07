exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const { language } = page.context.intl;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      language
    }
  });
};
