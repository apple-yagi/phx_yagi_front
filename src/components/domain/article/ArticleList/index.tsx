import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { md } from "~/styles/vars";
import { Article } from "~/types";
import { ArticleCard } from "./ArticleCard";

type Props = {
  articles: Article[];
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const article__card = css`
  width: 100%;

  @media (min-width: ${md}) {
    width: 47%;
  }
`;

export const ArticleList = ({ articles }: Props): JSX.Element => {
  return (
    <Root>
      {articles.map(article => (
        <ArticleCard key={article.id} css={article__card} article={article} />
      ))}
    </Root>
  );
};
