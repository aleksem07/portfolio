import ContactsPage from "@/components/pages/contacts/contacts-page";
import TitlePage from "@/app/title-page";
import { useTranslations } from "next-intl";


export default function About() {
  const t = useTranslations("page");
  return (
    <>
      <TitlePage title={t("title.contacts")} desc={t("desc.contacts")} />
      <ContactsPage />

    </>
  );
}
