import { GetStaticProps, NextPage } from "next";
import { Container, SectionTitle } from "@/styles/common";
import { Tag } from "@/types";
import { styled } from "twin.macro";

import { css } from "@emotion/react";
import { TagList } from "~/components/domain/tag/TagList";

type Props = {
  tags: Tag[];
};

const Root = styled.div`
  padding: 40px 0 30px;
`;

const CustomContainer = styled(Container)`
  max-width: 960px;
  margin: auto;
`;

export const getStaticProps: GetStaticProps = async context => {
  const tags: Tag[] = await (
    await fetch("http://localhost:4000/api/v1/tags")
  ).json();
  return {
    props: {
      tags
    }
  };
};

const TagsPage: NextPage<Props> = ({ tags }) => {
  return (
    <Root>
      <CustomContainer>
        <SectionTitle>Popular tags</SectionTitle>
        <TagList
          css={css`
            padding-top: 20px;
          `}
          tags={tags}
        />
      </CustomContainer>
    </Root>
  );
};

export default TagsPage;
