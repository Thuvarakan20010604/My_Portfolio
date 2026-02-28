import { FaCodepen, FaGraduationCap } from "react-icons/fa";
import { educationData, experienceData } from "@/constant/consant";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section id="resume" className="px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Resume</p>
          <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">Experience and Education</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 xl:grid-cols-2">
          <div>
            <h3 className="theme-text text-2xl font-semibold">Work Experience</h3>
            <div className="mt-6 space-y-5">
              {experienceData.map((item) => (
                <ResumeCard
                  key={item.id}
                  icon={FaCodepen}
                  title={item.title}
                  organization={item.organization}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="theme-text text-2xl font-semibold">Education</h3>
            <div className="mt-6 space-y-5">
              {educationData.map((item) => (
                <ResumeCard
                  key={item.id}
                  icon={FaGraduationCap}
                  title={item.title}
                  organization={item.organization}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
