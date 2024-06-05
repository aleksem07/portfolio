import STACK from "@/common/stack";
import Image from "next/image";
import styles from "@/styles/components/my-stack.module.scss";

const MyStack = () => {
  return (
    <section className={styles.my_stack}>
      <h3 className={styles.my_stack__title}>My stack:</h3>
      <ul className={styles.my_stack__list}>
        {STACK.map(({ name, id, image }) => (
          <li key={id}>
            <h4>{name}</h4>
            <Image src={image} alt={name} width={30} height={30} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyStack;
