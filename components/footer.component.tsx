import styles from "./footer.module.css";
import { IconBrandGithub } from "tabler-icons";

import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Link href="https://github.com/alez04/auth-sys" target={"_blank"}>
        <IconBrandGithub />
        alez04/auth-sys
      </Link>
    </div>
  );
}
