import styled from "@emotion/styled";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { API_BASE_URL } from "~/constants";
import { Container, GridContainer, SectionTitle } from "~/styles/common";
import { Tag } from "~/types";

type Props = {
  tag: Tag;
};

const Root = styled.div`
  padding: 40px 0 30px;
`;

const TagHeading = styled.header``;

const TagHeadingContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TagHeadingTitle = styled.h1`
  padding-left: 10px;
  font-size: 36px;
  font-weight: bold;
`;

const TagMain = styled.main`
  padding-top: 40px;
`;

const TagMainContainer = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;
  const res = await fetch(`${API_BASE_URL}v1/tags/${id}`);
  if (res.status !== 200) return { notFound: true };

  return {
    props: {
      tag: await res.json()
    }
  };
};

const TagPage: NextPage<Props> = ({ tag }) => {
  return (
    <Root>
      <TagHeading>
        <TagHeadingContainer>
          <Image src={tag.iconPath} alt={tag.name} width={60} height={60} />
          <TagHeadingTitle>{tag.displayName}</TagHeadingTitle>
        </TagHeadingContainer>
      </TagHeading>
      <TagMain>
        <TagMainContainer>
          <SectionTitle>Articles</SectionTitle>
          <GridContainer>
            {tag.articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </GridContainer>
        </TagMainContainer>
      </TagMain>
    </Root>
  );
};

export default TagPage;
