import { Link } from "react-router-dom";
import styles from "/src/styles/components/logo.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      &lt;aleksem07 /&gt;
    </Link>
  );
};

export default Logo;
