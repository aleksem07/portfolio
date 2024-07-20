import styles from "/src/styles/components/footer.module.scss";


const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();


  return (
    <div className={styles.right_reserved}>
      <p className="">
        © {currentYear} {"footer.rights"}
      </p>
    </div>
  );
};

export default AllRightsReserved;
