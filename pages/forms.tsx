import React, { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [formErrors, setFormErrors] = useState("");

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setUsername(value);
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === "") {
      setFormErrors("All fields are required");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="username"
        required
      />

      <input type="submit" value="Create Account" />
    </form>
  );
}
