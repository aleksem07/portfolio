import styles from "/src/styles/components/my-photo.module.scss";

import Image from "next/image";

const MyPhoto = () => {
  return (
    <div className={styles.my_photo}>
      <Image
        src="/me.jpg"
        className={styles.my_photo__me}
        alt={"Фото разработчика"}
        width={454}
        height={506}
      />
      <div className={styles.my_photo_decor__horizontal}></div>
      <div className={styles.my_photo_decor__vertical}></div>
    </div>
  );
};

export default MyPhoto;
