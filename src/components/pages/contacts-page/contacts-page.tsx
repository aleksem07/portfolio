import GetInTouchWithMe from "./get-in-touch-with-me";
import City from "../../city";
import Phone from "../../phone";
import Email from "../../email";

const ContactsPage = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>For Any Project Knock Us</p>
      <GetInTouchWithMe />
      <img
        src="/note.png"
        className=""
        alt="Developer`s photo"
        width={1148}
        height={636}
      />
      <City />
      <Phone />
      <Email />
    </div>
  );
};

export default ContactsPage;
