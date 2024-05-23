import { Link } from "react-router-dom";
import CONTACTS from "../common/contacts";

let email = "";

CONTACTS.forEach(contact => {
  if (contact.name === "mail") {
    return (email = contact.link);
  }
});

const mailFormatted = email.replace(/mailto:([^?]+).*/, "$1");

const Email = () => {
  return <Link to={email}>{mailFormatted}</Link>;
};

export default Email;
