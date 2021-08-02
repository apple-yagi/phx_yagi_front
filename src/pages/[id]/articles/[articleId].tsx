import { GetServerSideProps, NextPage } from "next";
import { API_BASE_URL } from "~/constants";
import { Container } from "~/styles/common";
import { Article } from "~/types";

type Props = {
  article: Article;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id, articleId } = context.query;
  const res = await fetch(
    `${API_BASE_URL}v1/users/${id}/articles/${articleId}`
  );
  if (res.status !== 200) {
    return {
      notFound: true
    };
  }

  const article = await res.json();
  return {
    props: {
      article
    }
  };
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <Container>
      <h1>{article.title}</h1>
    </Container>
  );
};

export default ArticlePage;
