import { servicesData } from "@/constant/consant";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section id="services" className="px-4 pb-20 pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Services</p>
          <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">
            Collaboration for impactful digital products
          </h2>
          <p className="theme-text-muted mt-4">
            I combine design thinking and engineering execution to ship web experiences that convert.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {servicesData.map((service) => (
            <ServicesCard
              key={service.id}
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
