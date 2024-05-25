import ROUTES from "./routes";
import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const { t } = useTranslation();

  const NAV_LINKS = [
    {
      name: t("navigate.home"),
      href: ROUTES.MAIN,
      active: true,
    },
    {
      name: t("navigate.about"),
      href: ROUTES.ABOUT,
      active: false,
    },
    {
      name: t("navigate.works"),
      href: ROUTES.WORKS,
      active: false,
    },
    {
      name: t("navigate.contacts"),
      href: ROUTES.CONTACTS,
      active: false,
    },
  ];

  return NAV_LINKS;
};

export default NavLinks;
