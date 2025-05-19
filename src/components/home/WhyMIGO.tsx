import { CheckCircle } from "lucide-react";
import React from "react";

const WhyMIGO = () => {
  return (
    <section id="why-migo" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why Choose MIGO?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We're dedicated to helping talented students from Uzbekistan reach
              their full potential at top universities around the world.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Accurate Talent Testing</h3>
                <p className="text-muted-foreground">
                  Our assessment methodology is designed to identify true
                  potential beyond standard academic metrics.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Tailored Guidance</h3>
                <p className="text-muted-foreground">
                  Personalized support throughout the entire process, from test
                  preparation to university applications.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Our students have successfully enrolled in prestigious
                  universities across Europe, North America, and Asia.
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
