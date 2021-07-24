import { GetStaticProps, NextPage } from "next";
import { Container } from "~/styles/common";
import { Article } from "~/types";
import styled from "@emotion/styled";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { css } from "@emotion/react";
import { md } from "~/styles/vars";

type Props = {
  articles: Article[];
};

const Root = styled.section`
  max-width: 960px;
  margin: 0 auto;
`;

const article__card = css`
  width: 100%;

  @media (min-width: ${md}) {
    width: 47%;
  }
`;

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
    <Root>
      <Container className='justify-between'>
        {articles.map(article => (
          <ArticleCard key={article.id} css={article__card} article={article} />
        ))}
      </Container>
    </Root>
  );
};

export default TopPage;
