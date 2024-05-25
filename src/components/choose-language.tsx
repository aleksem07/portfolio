import { useTranslation } from "react-i18next";

const ChooseLanguage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <select onChange={e => i18n.changeLanguage(e.target.value)}>
      <option value="">{t("select_lang.choose")}</option>
      <option value="ru">{t("select_lang.ru")}</option>
      <option value="en">{t("select_lang.en")}</option>
    </select>
  );
};

export default ChooseLanguage;
