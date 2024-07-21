import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectLinks: React.FC<{ currentProject: any }> = ({
  currentProject,
}) => (
  <>
    <li>
      <Link href={currentProject.deploy} target={"_blank"}>
        <Image
          className="rounded-full bg-white"
          src={"/stack/http.svg"}
          alt="Deploy"
          width={50}
          height={50}
          title="deploy"
        />
      </Link>
    </li>
    <li>
      <Link href={currentProject.github} target={"_blank"}>
        <Image
          className="rounded-full bg-white"
          src={"/stack/github.svg"}
          alt="Github"
          width={50}
          height={50}
          title="github"
        />
      </Link>
    </li>
    {currentProject.layout ? (
      <li>
        <Link href={currentProject.layout} target={"_blank"}>
          <Image
            className="rounded-full bg-white"
            src={"/stack/figma.svg"}
            alt="Layout"
            width={50}
            height={50}
            title="Layout"
          />
        </Link>
      </li>
    ) : null}
  </>
);

export default ProjectLinks;
