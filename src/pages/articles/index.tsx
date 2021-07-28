import styled from "@emotion/styled";
import { NextPage } from "next";
import { up } from "styled-breakpoints";
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

const ArticlesPage: NextPage<Props> = () => {
  return (
    <Root>
      <CustomContainer>
        <div className='w-full text-center'>
          <Emoji>🗃</Emoji>
          <Title>Articles</Title>
        </div>
        <ArticlesSection>
          <SectionTitle>Featured</SectionTitle>
        </ArticlesSection>
      </CustomContainer>
    </Root>
  );
};

export default ArticlesPage;
