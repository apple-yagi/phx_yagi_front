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
  background-color: white;
`;

const ArticleMainLink = styled.a`
  display: block;
  flex: 1 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
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

const ArticleTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 2px 16px 0;
  ${tw`space-x-2`}
`;

const TagItem = styled.li``;

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
      <Link href={`/${article.user.name}/articles/${article.id}`}>
        <ArticleMainLink>
          <EmojiContainer>
            <span>{animal}</span>
          </EmojiContainer>
          <TitleContainer>
            <ArticleTitle>{article.title}</ArticleTitle>
          </TitleContainer>
        </ArticleMainLink>
      </Link>
      <TagList>
        {article.tags.map(tag => (
          <TagItem key={tag.id}>
            <Link href={`/tags/${tag.id}`}>
              <a>
                <Image
                  src={tag.icon_path}
                  alt={tag.name}
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </TagItem>
        ))}
      </TagList>
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
