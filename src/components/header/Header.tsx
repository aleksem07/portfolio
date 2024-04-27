import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header_a}>
      <a href="/">
        <img src="/logo.svg" alt="Logo" />
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
