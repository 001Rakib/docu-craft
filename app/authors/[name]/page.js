import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-util";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocument = getDocumentByAuthor(docs, name);

  return <ContentDisplay id={matchedDocument[0].id} />;
};

export default AuthorPage;
