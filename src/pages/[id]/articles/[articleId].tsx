import { GetServerSideProps, NextPage } from "next";
import MDEditor from "@uiw/react-md-editor";
import { API_BASE_URL } from "~/constants";
import { Container } from "~/styles/common";
import { Article } from "~/types";
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "@uiw/react-markdown-preview/dist/markdown.css";

type Props = {
  article: Article;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id, articleId } = context.query;
  const res = await fetch(
    `${API_BASE_URL}v1/users/${id}/articles/${articleId}`
  );
  if (res.status !== 200)
    return {
      notFound: true
    };

  return {
    props: {
      article: await res.json()
    }
  };
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <Container>
      <h1>{article.title}</h1>
      <MDEditor.Markdown source={article.content} />
    </Container>
  );
};

export default ArticlePage;
