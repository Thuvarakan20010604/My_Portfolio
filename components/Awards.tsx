import Image from "next/image";
import { awardsData } from "@/constant/consant";

export default function Awards() {
  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Awards</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awardsData.map((a) => (
            <div key={a.id} className="rounded-2xl border p-4 shadow-sm">
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
                <Image src={`/${a.image}`} alt={a.title} fill className="object-cover" />
              </div>

              <div className="font-semibold">{a.title}</div>
              <div className="text-sm opacity-80">{a.organization} • {a.date}</div>
              <p className="mt-2 text-sm opacity-90">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}