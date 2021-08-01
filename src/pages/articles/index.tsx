import styled from "@emotion/styled";
import { GetServerSideProps, NextPage } from "next";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { Container, GridContainer, SectionTitle } from "~/styles/common";
import { Article } from "~/types";

type Props = {
  articles: Article[];
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
  const articles = await (
    await fetch("http://localhost:4000/api/v1/articles")
  ).json();
  return {
    props: {
      articles
    }
  };
};

const ArticlesPage: NextPage<Props> = ({ articles }) => {
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
