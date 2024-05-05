import ROUTES from "./routes";

const NAV_LINKS = [
  {
    name: "Home",
    href: ROUTES.MAIN,
    active: true,
  },
  {
    name: "About me",
    href: ROUTES.ABOUT,
    active: false,
  },
  {
    name: "My works",
    href: ROUTES.WORKS,
    active: false,
  },
  {
    name: "Contacts",
    href: ROUTES.CONTACTS,
    active: false,
  },
];

export default NAV_LINKS;
