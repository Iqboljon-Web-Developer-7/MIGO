import { Link } from "@/i18n/routing";
import { GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
// import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = async () => {
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        <div className="mx-auto container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span>MIGO</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#why-migo" className="text-sm font-medium hover:text-primary">
              Why MIGO
            </Link>
            <Link href="#success-stories" className="text-sm font-medium hover:text-primary">
              Success Stories
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Sign Up</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
    // <header className="p-4 flex items-center justify-center gap-3">
    //   <Link href={"/"}>{t("home")}</Link>
    //   <Link href={"/about"}>{t("about")}</Link>
    //   <Link href={"/login"}>{t("login")}</Link>
    // </header>
  );
};

export default Header;
