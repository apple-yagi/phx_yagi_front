import { GetServerSideProps, NextPage } from "next";
import { API_BASE_URL } from "~/constants";
import { Container } from "~/styles/common";
import { User } from "~/types";

type Props = {
  user: User;
};

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
    <Container>
      <h1 className='text-2xl'>{user.name}</h1>
      <ul>
        {user.articles?.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </Container>
  );
};

export default UserPage;
