import DefaultErrorPage from "next/error";
import styled from "@emotion/styled";
import { GetServerSideProps, NextPage } from "next";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { API_BASE_URL } from "~/constants";
import { Container, GridContainer, SectionTitle } from "~/styles/common";
import { Article, ArticleListResponse } from "~/types";
import Link from "next/link";
import tw from "twin.macro";
import { up } from "styled-breakpoints";

type Props = {
  articles: Article[];
  count: number;
  pageNum: number;
  statusCode?: number;
};

const Root = styled.div`
  padding: 40px 0 30px;
`;

const CustomContainer = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

const Emoji = styled.span`
  font-size: 72px;
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
`;

const ArticlesSection = styled.section`
  padding-top: 40px;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageLink = styled.a`
  border-radius: 10px;
  padding: 8px 15px;
  margin: 3px;
  background-color: white;
  ${tw`text-gray-400`}
  transition: 0.3s all;

  ${up("lg")} {
    :hover {
      box-shadow: 0 3px 4px -2px rgb(33 37 56 / 25%);
      ${tw`text-gray-800`}
    }
  }
`;

const NextLink = styled(PageLink)``;
const PrevLink = styled(PageLink)``;

export const getServerSideProps: GetServerSideProps = async context => {
  const { page } = context.query;
  const pageNum = page != null ? Number(page) : 1;
  if (isNaN(pageNum)) return { props: { statusCode: 400 } };

  const { articles, count } = (await (
    await fetch(
      `${API_BASE_URL}v1/articles?limit=15&offset=${(pageNum - 1) * 15}`
    )
  ).json()) as ArticleListResponse;

  if (!articles.length) return { props: { statusCode: 404 } };

  return {
    props: {
      articles,
      count,
      pageNum
    }
  };
};

const ArticlesPage: NextPage<Props> = ({
  articles,
  count,
  pageNum,
  statusCode
}) => {
  if (statusCode) return <DefaultErrorPage statusCode={statusCode} />;

  const isPrev = pageNum - 1 > 0;
  const isNext = count - (pageNum + 1) * 15 > -15;

  return (
    <Root>
      <CustomContainer>
        <div className='w-full text-center'>
          <Emoji>🗃</Emoji>
          <Title>Articles</Title>
        </div>
        <ArticlesSection>
          <SectionTitle>Featured</SectionTitle>
          <GridContainer>
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </GridContainer>
        </ArticlesSection>
        <PaginationContainer>
          {isPrev && (
            <Link href={`/articles?page=${pageNum - 1}`}>
              <PrevLink>←もどる</PrevLink>
            </Link>
          )}
          {isNext && (
            <Link href={`/articles?page=${pageNum + 1}`}>
              <NextLink>次のページへ→</NextLink>
            </Link>
          )}
        </PaginationContainer>
      </CustomContainer>
    </Root>
  );
};

export default ArticlesPage;
