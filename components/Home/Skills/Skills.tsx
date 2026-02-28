import { skillsData } from "@/constant/consant";

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="theme-card theme-border mx-auto w-full max-w-6xl rounded-3xl border p-8 sm:p-12">
        <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Skills</p>
        <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">Core Technologies</h2>

        <div className="mt-10 space-y-6">
          {skillsData.map((skill) => (
            <div key={skill.id}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="theme-text-soft font-medium">{skill.name}</span>
                <span className="theme-text-muted">{skill.level}%</span>
              </div>
              <div className="theme-surface h-2.5 w-full rounded-full">
                <div
                  className="theme-accent-fill h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  aria-label={`${skill.name} skill level ${skill.level} percent`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
