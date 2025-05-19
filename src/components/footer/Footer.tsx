import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations();

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2 font-bold">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span>{t("Footer.brand")}</span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t("Footer.copyright", { year: new Date().getFullYear() })}
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t("Footer.privacyPolicy")}
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t("Footer.termsOfService")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;