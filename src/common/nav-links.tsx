import ROUTES from "./routes";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations();

  const NAV_LINKS = [
    {
      name: t("navigate.home"),
      href: `${ROUTES.MAIN}`,
    },
    {
      name: t("navigate.about"),
      href: `${ROUTES.ABOUT}`,
    },
    {
      name: t("navigate.works"),
      href: `${ROUTES.WORKS}`,
    },
    {
      name: t("navigate.contacts"),
      href: `${ROUTES.CONTACTS}`,
    },
  ];

  return NAV_LINKS;
};

export default NavLinks;
