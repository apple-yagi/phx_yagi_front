import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { Article } from "~/types";
import { up } from "styled-breakpoints";

type Props = {
  article: Article;
};

const Root = styled.div`
  width: 100%;
  padding: 0 20px;
  ${tw`space-y-5`}

  ${up("sm")} {
    width: calc(100% - 108px);
  }
`;

const ArticleTitle = styled.h3`
  font-size: 15px;
  font-weight: bold;
  ${tw`text-gray-800`}
  margin-bottom: 7px;

  ${up("sm")} {
    font-size: 18px;
  }
`;

const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContainer = styled.div`
  ${tw`pl-3 flex flex-col`}
`;

const AuthorName = styled.span`
  font-size: 12.5px;
`;

const ArticleCreatedAt = styled.time`
  font-size: 11.5px;
  ${tw`text-gray-500`}
`;

export const ArticleContent = ({ article }: Props): JSX.Element => {
  return (
    <Root>
      <Link href={`/${article.user.name}/articles/${article.id}`}>
        <a>
          <ArticleTitle>{article.title}</ArticleTitle>
        </a>
      </Link>
      <Link href={`/${article.user.name}`}>
        <a>
          <ArticleAuthor>
            <Image
              src={article.user.photoURL}
              alt={article.user.name}
              width={34}
              height={34}
            />
            <AuthorContainer>
              <AuthorName>{article.user.name}</AuthorName>
              <ArticleCreatedAt>{article.createdAt}</ArticleCreatedAt>
            </AuthorContainer>
          </ArticleAuthor>
        </a>
      </Link>
    </Root>
  );
};
