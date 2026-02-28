import { languagesData } from "@/constant/consant";

export default function Languages() {
  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Languages</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {languagesData.map((l) => (
            <div key={l.id} className="rounded-2xl border p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{l.name}</div>
                <div className="text-sm opacity-80">{l.level}</div>
              </div>
              {l.note && <div className="mt-2 text-sm opacity-85">{l.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}