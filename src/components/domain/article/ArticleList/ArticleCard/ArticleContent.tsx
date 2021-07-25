import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { Article } from "~/types";
import { css } from "@emotion/react";

type Props = {
  article: Article;
};

const Root = styled.div`
  width: calc(100% - 108px);
  padding: 0 20px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const ArticleContent = ({ article }: Props): JSX.Element => {
  return (
    <Root className='space-y-5'>
      <Link href={`/${article.user.id}/articles/${article.id}`}>
        <a>
          <ArticleTitle>{article.title}</ArticleTitle>
        </a>
      </Link>
      <Link href={`/${article.user.id}`}>
        <a>
          <ArticleAuthor>
            <Image
              src='/img/no_image.png'
              alt={article.user.name}
              width={34}
              height={34}
            />
            <div className='pl-3 flex flex-col'>
              <span
                css={css`
                  font-size: 12.5px;
                `}>
                {article.user.name}
              </span>
              <time
                className='text-gray-500'
                css={css`
                  font-size: 11.5px;
                `}>
                {article.createdAt}
              </time>
            </div>
          </ArticleAuthor>
        </a>
      </Link>
    </Root>
  );
};
