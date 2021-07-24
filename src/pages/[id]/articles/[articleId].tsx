import { GetServerSideProps, NextPage } from "next";
import { Container } from "~/styles/common";
import { Article } from "~/types";

type Props = {
  article: Article;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { articleId } = context.query;
  const res = await fetch(`http://localhost:4000/api/v1/articles/${articleId}`);
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
