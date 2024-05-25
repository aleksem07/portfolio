import { Link } from "react-router-dom";
import CONTACTS from "../../common/contacts";
import styles from "/src/styles/components/footer.module.scss";

const Contacts = () => {
  return (
    <>
      <div className={styles.footer__body_links}>
        {CONTACTS.map(({ name, Icon, link }) => (
          <Link to={link} target="_blank" key={name}>
            <Icon className="" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contacts;
