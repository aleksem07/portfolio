import styles from "/src/styles/components/footer.module.scss";
import { useTranslations } from "next-intl";

const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <div className={styles.right_reserved}>
      <p className="">
        © {currentYear} {t("footer.rights")}
      </p>
    </div>
  );
};

export default AllRightsReserved;
