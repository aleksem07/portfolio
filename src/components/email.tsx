import Link from "next/link";
import CONTACTS from "@/common/contacts";
import styles from "/src/styles/components/email.module.scss";
import React from "react";

let email = "";

CONTACTS.forEach(contact => {
  if (contact.name === "mail") {
    return (email = contact.link);
  }
});
const mailFormatted = email.replace(/mailto:([^?]+).*/, "$1");

interface IEmailProps {
  className?: string;
}

const Email: React.FC<IEmailProps> = ({ className }) => {
  return (
    <Link className={`${styles.email} ${className || ""}`} href={email}>
      {mailFormatted}
    </Link>
  );
};

export default Email;
