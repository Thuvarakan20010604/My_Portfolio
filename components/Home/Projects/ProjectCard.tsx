import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
};

const ProjectCard = ({ image, title, description, tags, liveUrl, codeUrl }: ProjectCardProps) => {
  return (
    <article className="theme-card theme-border overflow-hidden rounded-2xl border">
      <div className="relative h-52 w-full">
        <Image src={`/${image}`} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="theme-text text-xl font-semibold">{title}</h3>
        <p className="theme-text-muted mt-3 text-sm leading-6">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="theme-accent theme-accent-border-soft rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
          <Link href={liveUrl} className="theme-accent transition hover:opacity-80">
            Live Demo
          </Link>
          <Link href={codeUrl} className="theme-text-soft transition hover:opacity-80">
            Source Code
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
