import { useTranslations } from "next-intl";

const City = () => {
  const t = useTranslations();
  return <span>{t("footer.city")}</span>;
};

export default City;
