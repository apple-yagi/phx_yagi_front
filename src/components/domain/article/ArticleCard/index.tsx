import styled from "@emotion/styled";
import Link from "next/link";
import tw from "twin.macro";
import { useAnimal } from "~/hooks/useAnimal";
import { Article } from "~/types";

type Props = {
  article: Article;
};

const Root = styled.article`
  border-radius: 9px;
`;

const EmojiContainer = styled.div`
  padding: 16px 0;
  font-size: 46px;
  line-height: 1.5;
  ${tw`bg-green-100 text-center`}
`;

export const ArticleCard = ({ article }: Props): JSX.Element => {
  const { animal } = useAnimal();

  return (
    <Root>
      <Link href={`/${article.user.id}/articles/${article.id}`}>
        <a>
          <EmojiContainer>{animal}</EmojiContainer>
        </a>
      </Link>
    </Root>
  );
};
