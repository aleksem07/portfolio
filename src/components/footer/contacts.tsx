import Link from "next/link";
import CONTACTS from "@/common/contacts";
import styles from "/src/styles/components/footer.module.scss";

interface IContactsProps {
  className?: string;
  classIcon?: string;
}

const Contacts: React.FC<IContactsProps> = ({ className, classIcon }) => {
  return (
    <ul className={`${styles.footer__body_links} ${className || ""}`}>
      {CONTACTS.map(({ name, Icon, link }) => (
        <li key={name}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Icon className={classIcon} aria-label={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
