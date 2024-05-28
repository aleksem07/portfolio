import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <h2>My mission is to make design easier.</h2>
      <p>
        Create custom Designs with AARONN that converts more visitors than any
        website. With lots of unique design, you can easily select a logo
        without hassle. Create custom landing logos with AARONN that converts
        more visitors than any website. With lots of revisions, you can easily
        build a logo without porbolem.
      </p>
      <Image
        src="/placeholder-pic.jpg"
        className=""
        alt="Developer`s photo"
        width={361}
        height={415}
      />
    </>
  );
};

export default AboutMe;
