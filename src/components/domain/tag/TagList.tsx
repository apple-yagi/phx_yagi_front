import Image from "next/image";
import Link from "next/link";
import { up } from "styled-breakpoints";
import tw, { styled } from "twin.macro";
import { Tag } from "~/types";

type Props = {
  tags: Tag[];
  className?: string;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.9rem;

  ${up("md")} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.4rem;
  }

  ${up("lg")} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.6rem;
  }
`;

const TagItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border: 1px solid;
  ${tw`border-gray-200`}
  border-radius: 7px;
  transition: 0.5s all;

  :hover {
    ${tw`bg-gray-50`}
    ${tw`border-gray-300`}
  }
`;

export const TagList = ({ tags, className }: Props): JSX.Element => {
  return (
    <GridContainer className={className}>
      {tags.map(tag => (
        <Link key={tag.id} href={`/tags/${tag.name}`}>
          <TagItem>
            <Image src={tag.iconPath} alt={tag.name} width={30} height={30} />
            <span className='mt-3'>{tag.displayName}</span>
          </TagItem>
        </Link>
      ))}
    </GridContainer>
  );
};
