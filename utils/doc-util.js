export const getDocumentByCategory = (docs, category) => {
  return docs.filter((doc) => doc.category === category);
};
export const getDocumentByAuthor = (docs, author) => {
  return docs.filter((doc) => doc.author === author);
};
export const getDocumentByTag = (docs, tag) => {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
};
