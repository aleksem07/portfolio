"use client";
import Projects from "@/common/projects";
import BackgroundBall from "@/components/background-ball";
import TitlePage from "@/app/title-page";
import styles from "@/styles/components/project-detail.module.scss";
import NotFound from "@/app/not-found";
import OtherProjects from "@/components/other-projects";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Project: React.FC = () => {
  const PROJECTS = Projects();
  const [selectedProject, setSelectedProject] = useState("");
  const currentProject = PROJECTS.find(
    project => project.pageName === selectedProject
  );

  const t = useTranslations("projects.block");
  const pathname = usePathname();

  useEffect(() => {
    const projectName = pathname.split("/")[3];
    setSelectedProject(projectName);
  }, [pathname]);

  return (
    <>
      {currentProject ? (
        <>
          <TitlePage title={t("detail-title")} desc={t("detail-subtitle")} />
          <section className={styles.project_detail}>
            <Link target="_blank" href={`${currentProject.image}`}>
              <Image
                className={styles.project_detail__image}
                src={currentProject.image}
                alt={`${t("alt-title")} ${currentProject.title}`}
                width={500}
                height={100}
              />
            </Link>

            <div className={styles.project_detail__desc_container}>
              <h3 className={styles.project_detail__title}>
                {currentProject.title}
              </h3>
              <p className={styles.project_detail__stack}>{t("stack-title")}</p>
              <p className={styles.project_detail__desc}>
                {currentProject.description}
              </p>

              <div className={styles.project_detail__links_container}>
                <Link href={currentProject.deploy} target={"_blank"}>
                  <Image
                    className="rounded-full bg-white"
                    src={"/stack/http.svg"}
                    alt="Github"
                    width={50}
                    height={50}
                    title="deploy"
                  />
                </Link>
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
              </div>
            </div>
          </section>
        </>
      ) : (
        <NotFound />
      )}

      <OtherProjects />
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
};

export default Project;
