import Image from "next/image";
import { certificatesData } from "@/constant/consant";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Certificates</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificatesData.map((c) => (
            <div key={c.id} className="rounded-2xl border p-4 shadow-sm">
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
                <Image src={`/${c.image}`} alt={c.title} fill className="object-cover" />
              </div>

              <div className="font-semibold">{c.title}</div>
              <div className="text-sm opacity-80">{c.issuer} • {c.date}</div>

              {c.credentialUrl && c.credentialUrl !== "#" && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm underline"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}