import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { Tag } from "~/types";

type Props = {
  tags: Tag[];
};

const Root = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TagList = ({ tags }: Props): JSX.Element => {
  return (
    <Root className='space-x-3'>
      {tags.map(tag => (
        <li key={tag.id}>
          <Link href={`/tags/${tag.id}`}>
            <a>
              <Image
                src={tag.icon_path}
                alt={tag.name}
                width={25}
                height={25}
              />
            </a>
          </Link>
        </li>
      ))}
    </Root>
  );
};
