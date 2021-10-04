import React, { useState } from "react";
import FormField from "../components/form-field";

export default function RegisterPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const register = (e) => {
    e.preventDefault();
    console.log({ email, password, repeatPassword });
  };

  return (
    <form onSubmit={register}>
      <FormField
        type="email"
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        type="password"
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormField
        type="password"
        label="repeat password"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
