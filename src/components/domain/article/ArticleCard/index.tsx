import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
import { useAnimal } from "~/hooks/useAnimal";
import { Article } from "~/types";

type Props = {
  article: Article;
  className?: string;
};

const Root = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  overflow: hidden;
  margin: 15px;
  box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
`;

const EmojiContainer = styled.div`
  padding: 16px 0;
  font-size: 46px;
  line-height: 1.5;
  ${tw`bg-green-100 text-center`}
`;

const TitleContainer = styled.div`
  padding: 10px 14px;
`;

const AuthorContainer = styled.div`
  padding: 10px 14px;
  display: flex;
  align-items: center;
`;

const AuthorName = styled.span`
  font-size: 13.5px;
`;

const ArticleCreatedAt = styled.time`
  font-size: 12.5px;
  ${tw`text-gray-500`}
`;

export const ArticleCard = ({ article, className }: Props): JSX.Element => {
  const { animal } = useAnimal();

  return (
    <Root className={className}>
      <Link href={`/${article.user.id}/articles/${article.id}`}>
        <a className='block'>
          <EmojiContainer>
            <span>{animal}</span>
          </EmojiContainer>
          <TitleContainer>
            <h3>{article.title}</h3>
          </TitleContainer>
        </a>
      </Link>
      <Link href={`/${article.user.name}`}>
        <a className='block'>
          <AuthorContainer>
            <Image
              src={article.user.photoURL}
              alt={article.user.name}
              width={35}
              height={35}
            />
            <div className='ml-2 flex flex-col'>
              <AuthorName>{article.user.name}</AuthorName>
              <ArticleCreatedAt>{article.createdAt}</ArticleCreatedAt>
            </div>
          </AuthorContainer>
        </a>
      </Link>
    </Root>
  );
};
