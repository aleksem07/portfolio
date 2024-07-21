import ContactsPage from "@/components/pages/contacts/contacts-page";
import TitlePage from "@/app/title-page";
import { generateStaticParams } from "@/components/generateStaticParams";

export default function About() {
  return (
    <>
      <TitlePage title={"Контакты"} desc={"Для сотрудничества"} />
      <ContactsPage />
    </>
  );
}

export { generateStaticParams };
