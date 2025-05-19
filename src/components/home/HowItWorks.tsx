import { CheckCircle, GraduationCap, LineChart } from "lucide-react";
import React from "react";
import { getTranslations } from "next-intl/server";

const HowItWorks = async () => {
  const t = await getTranslations();

  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold md:text-4xl/tight">
              {t("HowItWorks.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {t("HowItWorks.description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{t("HowItWorks.step1Title")}</h3>
            <p className="text-center text-muted-foreground">
              {t("HowItWorks.step1Description")}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{t("HowItWorks.step2Title")}</h3>
            <p className="text-center text-muted-foreground">
              {t("HowItWorks.step2Description")}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{t("HowItWorks.step3Title")}</h3>
            <p className="text-center text-muted-foreground">
              {t("HowItWorks.step3Description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;