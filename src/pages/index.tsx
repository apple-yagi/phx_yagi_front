import { GetStaticProps, NextPage } from "next";
import { Container } from "@/styles/common";
import { Article } from "@/types";

type Props = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async context => {
  const articles: Article[] = await (
    await fetch("http://localhost:4000/api/v1/articles")
  ).json();
  return {
    props: {
      articles
    }
  };
};

const TopPage: NextPage<Props> = ({ articles }) => {
  return (
    <Container>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <span>{article.title}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TopPage;
