import Link from "next/link";

type CardBoxProps = {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
};

export default function Cardbox({
  title,
  description,
  linkText,
  linkHref,
}: CardBoxProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="text-blue-700 font-semibold text-sm uppercase hover:underline"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}