import { Link } from "react-router-dom";
import CONTACTS from "../../common/contacts";

const Contacts = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`z-20 flex gap-4 ${className || ""}`}>
        {CONTACTS.map(({ name, Icon, link }) => (
          <Link to={link} target="_blank" key={name}>
            <Icon className="text-color-black hover:text-color-dark--light transition-all duration-300" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contacts;
