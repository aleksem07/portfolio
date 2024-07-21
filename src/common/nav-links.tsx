import ROUTES from "./routes";

const NavLinks = () => {
  const NAV_LINKS = [
    {
      name: "Главная",
      href: `${ROUTES.MAIN}`,
    },
    {
      name: "Обо мне",
      href: `${ROUTES.ABOUT}`,
    },
    {
      name: "Работы",
      href: `${ROUTES.WORKS}`,
    },
    {
      name: "Контакты",
      href: `${ROUTES.CONTACTS}`,
    },
  ];

  return NAV_LINKS;
};

export default NavLinks;
