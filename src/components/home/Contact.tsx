import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Join MIGO today and take the first step toward studying at a top
            university abroad.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button size="lg" className="w-full">
            Join MIGO Today!
          </Button>
          <p className="text-xs text-muted-foreground">
            No obligation. Start with a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
