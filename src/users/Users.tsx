import { gql, useQuery } from "@apollo/client";

const USERS = gql`
  query Users {
    users {
      email
    }
  }
`;

export const Users = () => {
  const { loading, data } = useQuery(USERS);

  loading && console.log(data);

  return (
    <>
      <span>Users</span>
    </>
  );
};
