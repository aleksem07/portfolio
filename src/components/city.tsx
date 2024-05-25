import { useTranslation } from "react-i18next";

const City = () => {
  const { t } = useTranslation();
  return <span>{t("footer.city")}</span>;
};

export default City;
