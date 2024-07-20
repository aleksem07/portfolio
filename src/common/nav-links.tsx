import ROUTES from "./routes";

const NavLinks = () => {
  const NAV_LINKS = [
    {
      name: "navigate.home",
      href: `${ROUTES.MAIN}`,
    },
    {
      name: "navigate.about",
      href: `${ROUTES.ABOUT}`,
    },
    {
      name: "navigate.works",
      href: `${ROUTES.WORKS}`,
    },
    {
      name: "navigate.contacts",
      href: `${ROUTES.CONTACTS}`,
    },
  ];

  return NAV_LINKS;
};

export default NavLinks;
