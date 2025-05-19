"use client";

import { GraduationCap, Moon, Sun } from "lucide-react";
import { Link } from "@/i18n/routing";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 dark:bg-gray-900/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 dark:supports-backdrop-filter:bg-gray-900/60">
      <div className="mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-foreground dark:text-white">
          <GraduationCap className="h-6 w-6 text-primary dark:text-primary-400" />
          <span>MIGO</span>
        </div>
        <div className="flex items-center">
          <nav className="hidden lg:flex gap-3 lg:gap-6">
            <Link
              href="#home"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
            >
              {t("Header.home")}
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
            >
              {t("Header.howItWorks")}
            </Link>
            <Link
              href="#why-migo"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
            >
              {t("Header.whyMigo")}
            </Link>
            <Link
              href="#success-stories"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
            >
              {t("Header.successStories")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
            >
              {t("Header.contact")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-4">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground dark:text-gray-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
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
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed top-16 right-0 w-full bg-background dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg p-6 z-50 lg:hidden animate-slide-in-right"
          style={{ animationFillMode: 'forwards' }}
        >
          <nav className="flex flex-col gap-4">
            <Link
              href="#home"
              className="text-lg font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
              onClick={closeMobileMenu}
            >
              {t("Header.home")}
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
              onClick={closeMobileMenu}
            >
              {t("Header.howItWorks")}
            </Link>
            <Link
              href="#why-migo"
              className="text-lg font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
              onClick={closeMobileMenu}
            >
              {t("Header.whyMigo")}
            </Link>
            <Link
              href="#success-stories"
              className="text-lg font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
              onClick={closeMobileMenu}
            >
              {t("Header.successStories")}
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary-400"
              onClick={closeMobileMenu}
            >
              {t("Header.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;