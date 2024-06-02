import styles from "/src/styles/components/background-ball.module.scss";

const BackgroundBall = ({ top = "", right = "", bottom = "", left = "" }) => {
  const style = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };

  return <div style={style} className={styles.background__ball}></div>;
};

export default BackgroundBall;
