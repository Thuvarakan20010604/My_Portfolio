import { IconType } from "react-icons";

type ResumeCardProps = {
  icon: IconType;
  title: string;
  organization: string;
  period: string;
  description: string;
};

const ResumeCard = ({ icon: Icon, title, organization, period, description }: ResumeCardProps) => {
  return (
    <article className="theme-card theme-border rounded-2xl border p-6">
      <div className="flex items-start gap-4">
        <span className="theme-accent-soft-bg theme-accent mt-1 rounded-xl p-3">
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <h3 className="theme-text text-lg font-semibold">{title}</h3>
          <p className="theme-accent mt-1 text-sm font-medium">{organization}</p>
          <p className="theme-text-muted mt-1 text-xs">{period}</p>
          <p className="theme-text-muted mt-3 text-sm leading-6">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default ResumeCard;
