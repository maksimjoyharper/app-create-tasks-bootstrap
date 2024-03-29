import React, { useEffect, useState } from "react";
import "./Form.css";
import { useMutation } from "@apollo/client";
import { SIGN_NUP } from "../apollo/mutation";
// import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");

  const [signup, { data, loading }] = useMutation(SIGN_NUP);
  // const navigate = useNavigate();

  return (
    <>
      <form
        id="form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          signup({
            variables: {
              email: email,
              password: password,
            },
          });
          console.log(data, loading);

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
          Signup
        </button>
      </form>
    </>
  );
};
