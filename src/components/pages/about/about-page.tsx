import AboutMe from "./about-me";
import FollowMe from "./follow-me";
import Teaching from "./teaching";

const AboutPage = () => {
  return (
    <section>
      <div>
        <h2>About Me</h2>
        <p>Little Brief About Myself</p>
      </div>
      <AboutMe />
      <Teaching />
      <FollowMe />
    </section>
  );
};

export default AboutPage;
