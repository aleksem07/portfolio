import Link from "next/link";
import CONTACTS from "@/common/contacts";
import styles from "/src/styles/components/footer.module.scss";

interface IContactsProps {
  className?: string;
  classIcon?: string;
}

const Contacts: React.FC<IContactsProps> = ({ className, classIcon }) => {
  return (
    <>
      <div className={`${styles.footer__body_links} ${className || ""}`}>
        {CONTACTS.map(({ name, Icon, link }) => (
          <Link href={link} target="_blank" key={name}>
            <Icon className={classIcon} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contacts;
