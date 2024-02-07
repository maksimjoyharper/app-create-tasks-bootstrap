import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(auth: { email: $email, password: $password }) {
      access_token
    }
  }
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { called, data, loading }] = useLazyQuery(LOGIN, {
    variables: { email: email, password: password },
  });

  return (
    <>
      <form
        id="form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          login({
            variables: {
              called: !called,
            },
          });
          loading && console.log(data);
          !called && console.log(data, loading);

          // loading && setToken(data.signup.access_token);

          // localStorage.setItem("token", data.signup.access_token);
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="email"
          className="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <button
          type="submit"
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
        >
          Login
        </button>
      </form>
    </>
  );
};
