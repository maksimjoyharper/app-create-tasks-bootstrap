import React from "react";
import "./Form.css";

export const FormLogin = () => {
  return (
    <>
      <form id="form" action="">
        <input type="email" placeholder="email" className="email" />
        <input type="password" placeholder="password" className="password" />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};
