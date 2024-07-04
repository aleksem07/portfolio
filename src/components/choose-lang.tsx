"use client";
import Image from "next/image";
import { useRouter, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const handleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-3 ml-auto">
      <button onClick={() => handleChange("ru")}>
        <Image
          src="/switch-lang/russia-flag.jpg"
          alt={t("select_lang.ru")}
          width={30}
          height={30}
          className="w-[auto]"
        />
      </button>
      <button onClick={() => handleChange("en")}>
        <Image
          src="/switch-lang/usa-flag.jpg"
          alt={t("select_lang.en")}
          width={30}
          height={30}
          className="w-[auto]"
        />
      </button>
    </div>
  );
}
