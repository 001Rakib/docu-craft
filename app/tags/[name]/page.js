import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/doc-util";

const TagsPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocument = getDocumentByTag(docs, name);

  return <ContentDisplay id={matchedDocument[0].id} />;
};

export default TagsPage;
