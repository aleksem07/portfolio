import GetInTouchWithMe from "./get-in-touch-with-me";
import bcgNote from "/src/assets/background/note.png";
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
        src={bcgNote}
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
