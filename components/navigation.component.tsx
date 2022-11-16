import styles from "./navigation.module.css";

import { IconLogin } from "tabler-icons";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <IconLogin size={40} />
        <Link href="/">alez04/auth-sys</Link>
      </div>
      <div className={styles.links}>
        <Link href="/login" className={styles.linkLogin}>
          Log in
        </Link>
        <Link href="/sign-up" className={styles.linkRegister}>
          Sign up
        </Link>
      </div>
    </nav>
  );
}
