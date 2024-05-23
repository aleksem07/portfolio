import placeholder from "/src/assets/placeholder-pic.jpg";
import ROUTES from "../../../common/routes";
import { Link } from "react-router-dom";

const GetKnowMe = () => {
  return (
    <section className="getKnowMe">
      <div className="getKnowMe__desc">
        <h3>Let’s get know about me closer</h3>
        <p>
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters and web design.
        </p>
        <Link className="button" to={ROUTES.ABOUT}>
          Discover More About Me
        </Link>
      </div>
      <img
        src={placeholder}
        className=""
        alt="Developer`s photo"
        width={454}
        height={506}
      />
    </section>
  );
};

export default GetKnowMe;
