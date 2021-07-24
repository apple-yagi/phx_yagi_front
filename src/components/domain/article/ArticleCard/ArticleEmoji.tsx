import styled from "@emotion/styled";
import Link from "next/link";

type Props = {
  userId: string;
  articleId: string;
};

const EmojiLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 92px;
  background-color: white;
  border-radius: 15px;
`;

const Emoji = styled.span`
  font-size: 42px;
`;

export const ArticleEmoji = ({ userId, articleId }: Props): JSX.Element => {
  return (
    <Link href={`/${userId}/articles/${articleId}`}>
      <EmojiLink>
        <Emoji>🦁</Emoji>
      </EmojiLink>
    </Link>
  );
};
