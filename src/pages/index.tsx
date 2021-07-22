import { GetStaticProps, NextPage } from "next";
import styled from "@emotion/styled";
import { Container } from "@/styles/common";

type Tag = {
  id: string;
  name: string;
  icon_path: string;
};

type Props = {
  tags: Tag[];
};

export const getStaticProps: GetStaticProps = async context => {
  const tags = await (await fetch("http://localhost:4000/api/v1/tags")).json();
  return {
    props: {
      tags
    }
  };
};

const TopPage: NextPage<Props> = ({ tags }) => {
  return (
    <Container>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>
            <img className='inline h-16 w-16 mr-2 mb-5' src={tag.icon_path} />
            <span>{tag.name}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TopPage;
