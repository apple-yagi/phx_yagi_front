import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { ArticleCard } from "~/components/domain/article/ArticleCard";
import { API_BASE_URL } from "~/constants";
import { Container, GridContainer } from "~/styles/common";
import { User } from "~/types";

type Props = {
  user: User;
};

const Root = styled.div``;

const UserProfile = styled.header``;

const UserProfileContaier = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
`;

const ArticleSection = styled.section`
  padding: 40px 0;
  ${tw`bg-green-50`}
`;

const ArticleContaier = styled(Container)`
  max-width: 960px;
  margin: 0 auto;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;
  const res = await fetch(`${API_BASE_URL}v1/users/${id}`);
  if (res.status !== 200)
    return {
      notFound: true
    };

  return {
    props: {
      user: await res.json()
    }
  };
};

const UserPage: NextPage<Props> = ({ user }) => {
  return (
    <Root>
      <UserProfile>
        <UserProfileContaier>
          <Image src={user.photoURL} alt={user.name} width={120} height={120} />
          <div>
            <h1>{user.name}</h1>
          </div>
        </UserProfileContaier>
      </UserProfile>
      <ArticleSection>
        <ArticleContaier>
          <GridContainer>
            {user.articles?.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </GridContainer>
        </ArticleContaier>
      </ArticleSection>
    </Root>
  );
};

export default UserPage;
