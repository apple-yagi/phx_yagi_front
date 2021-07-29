import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { Tag } from "~/types";

type Props = {
  tags: Tag[];
};

const Root = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${tw`space-x-3`}
`;

export const TagList = ({ tags }: Props): JSX.Element => {
  return (
    <Root>
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
