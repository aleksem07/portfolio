import ROUTES from "./routes";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations();

  const NAV_LINKS = [
    {
      name: t("navigate.home"),
      href: `${ROUTES.MAIN}`,
      active: true,
    },
    {
      name: t("navigate.about"),
      href: `${ROUTES.ABOUT}`,
      active: false,
    },
    {
      name: t("navigate.works"),
      href: `${ROUTES.WORKS}`,
      active: false,
    },
    {
      name: t("navigate.contacts"),
      href: `${ROUTES.CONTACTS}`,
      active: false,
    },
  ];

  return NAV_LINKS;
};

export default NavLinks;
