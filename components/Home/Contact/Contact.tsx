import Link from "next/link";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact" className="px-4 pb-24 pt-20">
      <div className="theme-card theme-border mx-auto grid w-full max-w-6xl gap-10 rounded-3xl border p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Contact</p>
          <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s work together</h2>
          <p className="theme-text-muted mt-5">
            If you need a web app, mobile app, or a secure system prototype, I can help from planning to deployment.
          </p>

          <div className="theme-text-soft mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <BiEnvelope className="theme-accent h-5 w-5" />
              thuvarakan200115600100@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <BiPhone className="theme-accent h-5 w-5" />
              +94 740 403 021
            </p>
            <p className="flex items-center gap-3">
              <BiMap className="theme-accent h-5 w-5" />
              Ariyalai, Jaffna, Sri Lanka
            </p>
          </div>
        </div>

        <div className="theme-card-strong theme-border rounded-2xl border p-7">
          <h3 className="theme-text text-xl font-semibold">Ready to start?</h3>
          <p className="theme-text-muted mt-3 text-sm leading-6">
            Send a quick message and I will reply with timeline, approach, and estimated cost.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="mailto:thuvarakan200115600100@gmail.com"
              className="theme-accent-bg rounded-full px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
            >
              Email Me
            </Link>
            <Link
              href="#home"
              className="theme-border theme-text-soft theme-accent-border-hover theme-accent-hover rounded-full border px-5 py-2.5 text-sm font-semibold transition"
            >
              Back to Top
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
