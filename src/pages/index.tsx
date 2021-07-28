import { GetServerSideProps, NextPage } from "next";
import tw, { styled } from "twin.macro";
import { Container } from "~/styles/common";
import { Article } from "~/types";
import { ArticleList } from "~/components/domain/article/ArticleList";
import Link from "next/link";
import { up } from "styled-breakpoints";

type Props = {
  articles: Article[];
};

const Root = styled.div``;

const ArticlesSection = styled.section`
  padding-top: 40px;
  ${tw`bg-green-100`}
`;

const CustomContainer = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;

  ${up("sm")} {
    font-size: 36px;
  }
`;

const MoreLink = styled.a`
  margin: 20px auto;
  font-size: 16px;
  font-weight: bold;
  ${tw`text-gray-400`}
  transition: 0.3s color;

  :hover {
    ${tw`text-gray-600`};
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

const TopPage: NextPage<Props> = ({ articles }) => {
  return (
    <Root>
      <ArticlesSection>
        <CustomContainer>
          <SectionTitle>Articles</SectionTitle>
          <ArticleList articles={articles} />
          <Link href='/articles'>
            <MoreLink>記事をもっと見る 👉</MoreLink>
          </Link>
        </CustomContainer>
      </ArticlesSection>
    </Root>
  );
};

export default TopPage;
