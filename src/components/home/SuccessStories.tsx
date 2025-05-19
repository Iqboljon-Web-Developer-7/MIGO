import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

import UserImg1 from "@/assets/testimoniols/4.png";
import UserImg2 from "@/assets/testimoniols/1.png";
import UserImg3 from "@/assets/testimoniols/7.jpg";

const SuccessStories = () => {
  return (
    <section
      id="success-stories"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Success Stories
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Hear from students who transformed their future with MIGO
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
            <Image
              src={UserImg1?.src}
              width={100}
              height={100}
              alt="Student portrait"
              className="rounded-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Aziza K.</h3>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Studying in Germany</span>
              </div>
              <p className="text-muted-foreground">
                "MIGO helped me get into Technical University of Munich! Their
                guidance was invaluable throughout the entire process."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
            <Image
              src={UserImg2?.src}
              width={100}
              height={100}
              alt="Student portrait"
              className="rounded-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Bobur M.</h3>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Studying in USA</span>
              </div>
              <p className="text-muted-foreground">
                "I never thought I could study at an Ivy League university.
                MIGO's assessment revealed my potential and helped me get into
                Cornell!"
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
            <Image
              src={UserImg3?.src}
              width={100}
              height={100}
              alt="Student portrait"
              className="rounded-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Dilshod T.</h3>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Studying in South Korea</span>
              </div>
              <p className="text-muted-foreground">
                "MIGO's personalized approach helped me identify my strengths
                and secure a scholarship at Seoul National University."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
