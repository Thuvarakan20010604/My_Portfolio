import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { BiDownload } from "react-icons/bi";
import { NavLinks } from "@/constant/consant";
import ThemeToggle from "./ThemeToggle";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={closeNav}
        aria-label="Close menu overlay"
        className={`theme-overlay fixed inset-0 z-40 transition-opacity duration-300 ${
          showNav ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`theme-card theme-text fixed right-0 top-0 z-50 flex h-screen w-[80%] flex-col border-l p-8 transition-transform duration-300 sm:w-[55%] ${navOpen} theme-border`}
      >
        <button
          type="button"
          onClick={closeNav}
          className="theme-text self-end"
          aria-label="Close navigation menu"
        >
          <CgClose className="h-8 w-8" />
        </button>

        <nav className="mt-10 flex flex-col gap-6">
          <ThemeToggle />
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="theme-text-soft theme-border theme-accent-hover w-fit border-b pb-1 text-xl font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Thuvarakan_Lingam_CV.pdf"
            download
            onClick={closeNav}
            className="theme-outline-btn mt-3 inline-flex w-fit items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition"
          >
            <BiDownload className="mr-1 h-4 w-4" />
            Download CV
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default MobileNav;
