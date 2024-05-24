import { useTranslation } from "react-i18next";

const ChooseLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <select onChange={e => i18n.changeLanguage(e.target.value)}>
      <option>Choose language</option>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
};

export default ChooseLanguage;
