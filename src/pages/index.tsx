import { GetServerSideProps, NextPage } from "next";
import { Container } from "~/styles/common";
import { Article, User } from "~/types";
import styled from "@emotion/styled";
import { ArticleList } from "~/components/domain/article/ArticleList";
import Link from "next/link";

type Props = {
  articles: Article[];
  users: User[];
};

const Root = styled.div``;

const CustomContainer = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  margin: 40px 0 15px;
`;

const MoreLink = styled.a`
  margin: 20px auto;
  font-size: 16px;
  font-weight: bold;
  color: #9ca3af;
  transition: 0.3s color;

  :hover {
    color: #4b5563;
  }
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const [articlesRes, usersRes] = await Promise.all([
    fetch("http://localhost:4000/api/v1/articles"),
    fetch("http://localhost:4000/api/v1/users")
  ]);
  const [articles, users] = await Promise.all([
    articlesRes.json(),
    usersRes.json()
  ]);
  return {
    props: {
      articles,
      users
    }
  };
};

const TopPage: NextPage<Props> = ({ articles, users }) => {
  return (
    <Root>
      <div className='bg-green-100'>
        <CustomContainer>
          <SectionTitle>Articles</SectionTitle>
          <ArticleList articles={articles} />
          <Link href='/articles'>
            <MoreLink>記事をもっと見る 👉</MoreLink>
          </Link>
        </CustomContainer>
      </div>
      <div className='bg-gray-100 mt-1'>
        <CustomContainer>
          <SectionTitle>Users</SectionTitle>
        </CustomContainer>
      </div>
    </Root>
  );
};

export default TopPage;
