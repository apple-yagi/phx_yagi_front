import styled from "@emotion/styled";
import { Article } from "~/types";
import { ArticleEmoji } from "./ArticleEmoji";
import { ArticleContent } from "./ArticleContent";

type Props = {
  article: Article;
  className?: string;
};

const Root = styled.article`
  display: flex;
  padding: 15px 0;
`;

export const ArticleItem = ({ article, className }: Props): JSX.Element => {
  return (
    <Root className={className}>
      <ArticleEmoji userId={article.user.id} articleId={article.id} />
      <ArticleContent article={article} />
    </Root>
  );
};
