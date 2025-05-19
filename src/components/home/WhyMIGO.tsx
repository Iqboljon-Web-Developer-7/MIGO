import { CheckCircle } from "lucide-react";
import React from "react";
import { getTranslations } from "next-intl/server";

const WhyMIGO = async () => {
  const t = await getTranslations();

  return (
    <section id="why-migo" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl/tight">
              {t("WhyMIGO.title")}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              {t("WhyMIGO.description")}
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">
                  {t("WhyMIGO.point1Title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("WhyMIGO.point1Description")}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">
                  {t("WhyMIGO.point2Title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("WhyMIGO.point2Description")}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">
                  {t("WhyMIGO.point3Title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("WhyMIGO.point3Description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMIGO;
