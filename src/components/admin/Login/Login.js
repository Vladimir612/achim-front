"use client";

import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        router.push(`/${locale}/admin`);
      }
    }
  }, [submitted]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const baseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;

  const handleSubmit = async () => {
    const loginData = {
      email: username,
      password: password,
    };

    try {
      const res = await axios.post(`${baseURL}/api/admin/login`, loginData);

      localStorage.setItem("jwtToken", res.data.token);
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(err.response.data.error);
    }
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </button>
        {errorMsg && (
          <p style={{ marginTop: "1rem", color: "red" }}>{errorMsg}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
