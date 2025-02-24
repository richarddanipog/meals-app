import { FC } from "react";

interface MealLinkProps {
  url?: string;
  title: string;
  linkText: string;
}

const MealLink: FC<MealLinkProps> = ({ url, title, linkText }) => {
  if (!url) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        {linkText}
      </a>
    </div>
  );
};

export default MealLink;
