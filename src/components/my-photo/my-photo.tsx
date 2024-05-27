import styles from "/src/styles/components/my-photo.module.scss";
import { useTranslation } from "react-i18next";

const MyPhoto = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.my_photo}>
      <img
        src="/me.jpg"
        className={styles.my_photo__me}
        alt={t("dev_photo.dev_alt")}
        width={454}
        height={506}
      />
      <div className={styles.my_photo_decor__horizontal}></div>
      <div className={styles.my_photo_decor__vertical}></div>
    </div>
  );
};

export default MyPhoto;
