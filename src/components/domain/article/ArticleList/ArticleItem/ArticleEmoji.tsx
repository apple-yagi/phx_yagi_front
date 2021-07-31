import styled from "@emotion/styled";
import Link from "next/link";
import { up } from "styled-breakpoints";
import { useAnimal } from "~/hooks/useAnimal";

type Props = {
  username: string;
  articleId: string;
};

const EmojiLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  background-color: white;
  border-radius: 15px;

  ${up("md")} {
    width: 92px;
    height: 92px;
  }
`;

const Emoji = styled.span`
  font-size: 42px;
`;

export const ArticleEmoji = ({ username, articleId }: Props): JSX.Element => {
  const { animal } = useAnimal();

  return (
    <Link href={`/${username}/articles/${articleId}`}>
      <EmojiLink>
        <Emoji>{animal}</Emoji>
      </EmojiLink>
    </Link>
  );
};
