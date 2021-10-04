import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import FormField from "../components/form-field";

import { Auth } from "../services/auth";

export default function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    Auth.login(username, password).then((res) => {
      console.log(res);
      setLoginSuccess(true);
    });
  };

  return loginSuccess ? (
    <Redirect to="/home" />
  ) : (
    <form onSubmit={onLogin} style={{ margin: "10px" }}>
      <FormField
        type="text"
        label="username"
        onChange={(v) => setUsername(v.target.value)}
      />
      <FormField
        type="password"
        label="password"
        onChange={(v) => setPassword(v.target.value)}
      />
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  );
}
