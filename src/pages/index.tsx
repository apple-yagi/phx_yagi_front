import { GetStaticProps, NextPage } from "next";
import tw, { styled } from "twin.macro";
import { Container, SectionTitle } from "~/styles/common";
import { Article, ArticleListResponse } from "~/types";
import { ArticleList } from "~/components/domain/article/ArticleList";
import Link from "next/link";
import { API_BASE_URL } from "~/constants";
import { Navigation } from "~/components/layouts/Navigation";

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

export const getStaticProps: GetStaticProps = async () => {
  const res: ArticleListResponse = await (
    await fetch(`${API_BASE_URL}v1/articles?limit=20`)
  ).json();
  return {
    props: {
      articles: res.articles
    },
    revalidate: 60
  };
};

const TopPage: NextPage<Props> = ({ articles }) => {
  return (
    <Root>
      <Navigation />
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
