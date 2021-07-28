import styled from "@emotion/styled";
import { NextPage } from "next";
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

const ArticlesPage: NextPage<Props> = () => {
  return (
    <Root>
      <CustomContainer>
        <div className='w-full text-center'>
          <Emoji>🗃</Emoji>
          <Title>Articles</Title>
        </div>
      </CustomContainer>
    </Root>
  );
};

export default ArticlesPage;
