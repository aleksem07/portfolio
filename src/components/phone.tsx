import { Link } from "react-router-dom";
import CONTACTS from "../common/contacts";

let phone = "";

CONTACTS.forEach(contact => {
  if (contact.name === "phone") {
    return (phone = contact.link);
  }
});

const phoneFormatted = phone.replace("tel:", "").replace("-", "");

const Phone = () => {
  return <Link to={phone}>+{phoneFormatted}</Link>;
};

export default Phone;
