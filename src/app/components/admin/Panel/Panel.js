import React, { useEffect, useState } from "react";
import styles from "./panel.module.scss";
import { useRouter } from "next/navigation";

const Panel = () => {
  const [logout, setLogout] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [logout]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setLogout(true);
  };

  const handleSubmit = () => {
    // handle form submission logic here
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.banner}>
        <h1>Hello, name</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className={styles.formWrapper}>
        <h2>Add Community Member</h2>
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
        </form>
      </div>
      <div className={styles.formWrapper}>
        <h2>Add Event</h2>
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
        </form>
      </div>
    </div>
  );
};

export default Panel;
