'use client';

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import FallBeamBackground from "./ParticalBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="theme-text relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      <FallBeamBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="relative">
          <Image
            src="/images/profile.jpg"
            alt="Thuvarakan profile"
            width={220}
            height={220}
            className="theme-accent-border theme-accent-shadow h-40 w-40 rounded-full border-4 object-cover sm:h-52 sm:w-52"
            priority
          />
        </div>

        <p className="theme-accent theme-accent-border-soft theme-accent-soft-bg mt-6 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
          Full‑Stack • Mobile-Apps • Security
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Building reliable products with clean code and real impact.
        </h1>

        <h2 className="theme-text-soft mt-6 flex flex-wrap items-center justify-center text-base font-medium sm:text-2xl">
          Hi, I&apos;m Thuvarakan.
          <span className="theme-accent ml-2">
            <Typewriter
              options={{
                strings: ["Full‑Stack Developer", "Flutter Developer", "Security‑minded Builder"],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 60,
              }}
            />
          </span>
        </h2>

        <p className="theme-text-muted mt-6 max-w-2xl text-sm sm:text-base">
          I help businesses launch user-friendly products with clean code, strong design,
          and reliable delivery.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="theme-accent-bg rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
          >
            See Projects
            <BsArrowRight className="ml-2 inline-block h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="theme-border theme-text-soft theme-accent-border-hover theme-accent-hover rounded-full border px-8 py-3 text-sm font-semibold transition"
          >
            Contact Me
          </Link>
          <a
            href="/Thuvarakan_Lingam_CV.pdf"
            download
            className="theme-outline-btn rounded-full border px-8 py-3 text-sm font-semibold transition"
          >
            <BiDownload className="mr-1 inline-block h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
