"use client";

type Credentials = {
  email: string;
  password: string;
};

type APIResponse = {
  data: {
    user: object;
    token: string;
    message: string;
  };
};

import React, { useState } from "react";
import axios from "axios";

import styles from "./login.module.css";

export default function SignUp() {
  const [credentials, setCredential] = useState<Credentials>({
    email: "",
    password: "",
  });

  async function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setCredential({
      ...credentials,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      data: { user, token, message },
    }: APIResponse = await axios.post("/api/auth/login", credentials);
    // setUser(newUser);
    window.alert(message);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>Welcome back 😘</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Please enter your email"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Please enter your password"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Log me in</button>
      </form>
    </div>
  );
}
