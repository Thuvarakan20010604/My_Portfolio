import Image from "next/image";

type ServicesCardProps = {
  icon: string;
  name: string;
  description: string;
};

const ServicesCard = ({ icon, name, description }: ServicesCardProps) => {
  return (
    <article className="theme-card theme-border theme-accent-border-soft-hover rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1">
      <Image src={`/${icon}`} alt={name} width={64} height={64} className="mb-5 h-16 w-16 object-contain" />
      <h3 className="theme-text text-xl font-semibold">{name}</h3>
      <p className="theme-text-muted mt-3 text-sm leading-6">{description}</p>
    </article>
  );
};

export default ServicesCard;
