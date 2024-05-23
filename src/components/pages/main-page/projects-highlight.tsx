import { Link } from "react-router-dom";
import ROUTES from "../../../common/routes";
import placeholder from "/src/assets/placeholder-pic.jpg";

const ProjectsHighlight = () => {
  return (
    <section>
      <h2>My Projects Highlight</h2>
      <Link to={ROUTES.WORKS}>Explore More</Link>
      <ul>
        <li>
          <img
            src={placeholder}
            className=""
            alt="Developer`s photo"
            width={454}
            height={506}
          />
          <h3>Brand Journey Improvements</h3>
          <ul>
            <li>stack</li>
          </ul>
        </li>
        <li>
          <img
            src={placeholder}
            className=""
            alt="Developer`s photo"
            width={454}
            height={506}
          />
          <h3>Brand Journey Improvements2</h3>
          <ul>
            <li>stack2</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsHighlight;
