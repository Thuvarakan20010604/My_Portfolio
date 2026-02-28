'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from "@/constant/consant";
import ThemeToggle from "./ThemeToggle";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-200 ${
        isScrolled
          ? "theme-nav-bg shadow-lg backdrop-blur"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex h-full w-[92%] max-w-6xl items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <span className="theme-accent-bg flex h-10 w-10 items-center justify-center rounded-full">
            <FaCode className="h-5 w-5" />
          </span>
          <span className="theme-text hidden text-xl font-semibold sm:block">
            Lingam Thuvarakan
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="theme-text-soft theme-accent-hover text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="/Thuvarakan_Lingam_CV.pdf"
            download
            className="theme-outline-btn rounded-full border px-5 py-2.5 text-sm font-semibold transition"
          >
            <BiDownload className="mr-1 inline-block h-4 w-4" />
            Download CV
          </a>
          <Link
            href="#contact"
            className="theme-accent-bg rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          onClick={openNav}
          className="theme-text cursor-pointer lg:hidden"
          aria-label="Open navigation menu"
        >
          <HiBars3BottomRight className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
