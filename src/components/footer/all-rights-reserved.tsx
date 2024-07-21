import styles from "/src/styles/components/footer.module.scss";

const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.right_reserved}>
      <p className="">
        © {currentYear} {"Все права защищены"}
      </p>
    </div>
  );
};

export default AllRightsReserved;
