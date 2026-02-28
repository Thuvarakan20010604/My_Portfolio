import Image from "next/image";
import { volunteeringData } from "@/constant/consant";

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Volunteering</h2>

        <div className="space-y-6">
          {volunteeringData.map((v) => (
            <div key={v.id} className="rounded-2xl border p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-6">
                {v.image && (
                  <div className="relative w-full lg:w-80 h-48 rounded-xl overflow-hidden">
                    <Image src={`/${v.image}`} alt={v.organization} fill className="object-cover" />
                  </div>
                )}

                <div className="flex-1">
                  <div className="text-xl font-semibold">{v.role}</div>
                  <div className="opacity-90">{v.organization}</div>
                  <div className="text-sm opacity-80">
                    {v.period}{v.location ? ` • ${v.location}` : ""}
                  </div>

                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm opacity-90">
                    {v.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}