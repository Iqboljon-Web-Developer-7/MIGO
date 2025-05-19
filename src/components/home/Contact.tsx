import React from "react";
import { Button } from "../ui/button";
import { getTranslations } from "next-intl/server";

const Contact = async () => {
  const t = await getTranslations();

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold md:text-4xl/tight">
            {t("Contact.title")}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            {t("Contact.description")}
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button size="lg" className="w-full">
            {t("Contact.button")}
          </Button>
          <p className="text-xs text-muted-foreground">
            {t("Contact.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;