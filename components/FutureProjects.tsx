import { futureProjectsData } from "@/constant/consant";

export default function FutureProjects() {
  return (
    <section id="future" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Future Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {futureProjectsData.map((p) => (
            <div key={p.id} className="rounded-2xl border p-5 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="font-semibold">{p.title}</div>
                <span className="text-xs px-2 py-1 rounded-full border">
                  {p.status}
                </span>
              </div>

              {p.eta && <div className="text-xs opacity-80 mt-1">ETA: {p.eta}</div>}

              <p className="mt-3 text-sm opacity-90">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.plannedStack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border opacity-90">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}