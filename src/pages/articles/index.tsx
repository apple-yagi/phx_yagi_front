import DefaultErrorPage from "next/error";
import styled from "@emotion/styled";
import { GetServerSideProps, NextPage } from "next";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { API_BASE_URL } from "~/constants";
import { Container, GridContainer, SectionTitle } from "~/styles/common";
import { Article } from "~/types";

type Props = {
  articles: Article[];
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

export const getServerSideProps: GetServerSideProps = async context => {
  const { page } = context.query;
  console.log(page);
  const pageNum = page != null ? Number(page) : 1;
  if (isNaN(pageNum)) return { props: { statusCode: 400 } };

  const articles = await (
    await fetch(`${API_BASE_URL}v1/articles?offset=${(pageNum - 1) * 20}`)
  ).json();

  if (!articles.length) return { props: { statusCode: 404 } };

  return {
    props: {
      articles
    }
  };
};

const ArticlesPage: NextPage<Props> = ({ articles, statusCode }) => {
  if (statusCode) return <DefaultErrorPage statusCode={statusCode} />;

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
      </CustomContainer>
    </Root>
  );
};

export default ArticlesPage;
