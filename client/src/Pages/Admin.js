import React, { useState } from "react";
import Login from "./Login";
import useToken from "./UserToken";

export default function Admin() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <h1>Hi i am admin</h1>
    </div>
  );
}
