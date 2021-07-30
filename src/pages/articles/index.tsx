import styled from "@emotion/styled";
import { GetServerSideProps, NextPage } from "next";
import { up } from "styled-breakpoints";
import tw from "twin.macro";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { Container } from "~/styles/common";
import { Article } from "~/types";

type Props = {
  articles: Article[];
};

const Root = styled.div`
  padding-top: 40px;
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

const SectionTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;

  ${up("md")} {
    font-size: 36px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${up("sm")} {
    grid-template-columns: 50% 50%;
  }

  ${up("lg")} {
    grid-template-columns: 33% 33% 33%;
  }
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
