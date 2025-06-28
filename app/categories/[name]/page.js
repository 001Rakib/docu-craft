import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils/doc-util";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocument = getDocumentByCategory(docs, name);

  return <ContentDisplay id={matchedDocument[0].id} />;
};

export default CategoryPage;
