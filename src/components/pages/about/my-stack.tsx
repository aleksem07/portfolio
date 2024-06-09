import STACK from "@/common/stack";
import Image from "next/image";
import styles from "@/styles/components/my-stack.module.scss";
import { useTranslations } from "next-intl";

const MyStack = () => {
  const t = useTranslations("about-page");
  return (
    <section className={styles.my_stack}>
      <h3 className={styles.my_stack__title}>{t("title-tools")}:</h3>
      <ul className={styles.my_stack__list}>
        {STACK.map(({ name, id, image }) => (
          <li key={id}>
            <Image
              className={`${styles.my_stack__image} bg-white rounded-full p-2`}
              src={image}
              alt={name}
              width={90}
              height={90}
              title={name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyStack;
