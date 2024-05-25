import styles from "/src/styles/components/footer.module.scss";
import { useTranslation } from "react-i18next";

const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className={styles.right_reserved}>
      <p className="">
        © {currentYear} {t("footer.rights")}
      </p>
    </div>
  );
};

export default AllRightsReserved;
