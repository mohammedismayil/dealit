import React, { useState } from "react";
import PropTypes from "prop-types";
async function loginUser(credentials) {
  return fetch("http://localhost:5000/loginadmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="px-20 mt-auto m-auto w-96 content-center justify-center rounded-md">
      <h1 className="content-center justify-center flex">Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="border border-black rounded-sm pl-2"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-sm pl-2"
          />
        </label>
        <div className="content-center justify-center flex py-3">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
