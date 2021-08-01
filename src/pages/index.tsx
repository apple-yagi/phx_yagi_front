import { GetServerSideProps, NextPage } from "next";
import tw, { styled } from "twin.macro";
import { Container, SectionTitle } from "~/styles/common";
import { Article } from "~/types";
import { ArticleList } from "~/components/domain/article/ArticleList";
import Link from "next/link";

type Props = {
  articles: Article[];
};

const Root = styled.div``;

const ArticlesMain = styled.main`
  padding: 40px 0 30px;
  ${tw`bg-green-100`}
`;

const CustomContainer = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

const MoreLinkWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const MoreLink = styled.a`
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
      <ArticlesMain>
        <CustomContainer>
          <SectionTitle>Articles</SectionTitle>
          <ArticleList articles={articles} />
          <MoreLinkWrapper>
            <Link href='/articles'>
              <MoreLink>記事をもっと見る 👉</MoreLink>
            </Link>
          </MoreLinkWrapper>
        </CustomContainer>
      </ArticlesMain>
    </Root>
  );
};

export default TopPage;
