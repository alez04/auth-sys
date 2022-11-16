"use client";

type Credentials = {
  nickname: string;
  email: string;
  password: string;
};

type APIResponse = {
  data: {
    newUser?: Object;
    message?: string;
  };
};

import React, { useState } from "react";
import axios from "axios";

import { userAtom } from "../../atoms/atoms";
import { useRecoilState } from "recoil";

import styles from "./signup.module.css";

export default function SignUp() {
  const [user, setUser] = useRecoilState<any>(userAtom);
  const [credentials, setCredential] = useState<Credentials>({
    nickname: "",
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
      data: { newUser, message },
    }: APIResponse = await axios.post("/api/auth/register", credentials);
    // setUser(newUser);
    window.alert(message);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>Welcome 😎</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickname">Nickname</label>
        <input
          id="nickname"
          type="text"
          name="nickname"
          placeholder="e.g. initiativespatula"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="abc@domain.xyz"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="more or equal to 6 characters"
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Sign me up</button>
      </form>
    </div>
  );
}
