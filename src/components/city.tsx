import { useTranslations } from "next-intl";
import styles from "@/styles/components/city.module.scss";

const City = () => {
  const t = useTranslations();
  return <span className={styles.city}>{t("footer.city")}</span>;
};

export default City;
