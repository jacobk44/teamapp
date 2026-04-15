

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="
      bg-white 
      rounded-2xl 
      p-6 
      text-center 
      border 
      shadow-sm 
      hover:shadow-md 
      hover:-translate-y-1 
      transition
    ">
      <div className="text-xl mb-3">{icon}</div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}