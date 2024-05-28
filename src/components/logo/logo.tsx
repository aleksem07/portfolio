import Link from "next/link";
import styles from "/src/styles/components/logo.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      &lt;aleksem07 /&gt;
    </Link>
  );
};

export default Logo;
