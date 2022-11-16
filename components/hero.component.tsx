"use client";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <img
        src="moonlight.svg"
        width="50%"
        className={styles.svg}
        alt="moonlight svg"
      />
      <div className={styles.message}>You are not authentificated yet.</div>
    </div>
  );
}
