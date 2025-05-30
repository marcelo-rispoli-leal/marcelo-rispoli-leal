import {
  IoColorWandOutline,
  IoCodeSlash,
  IoServerOutline,
  IoLogoAmazon,
  IoDesktopOutline,
  IoConstructOutline,
  IoReceiptOutline,
} from "react-icons/io5";

// Mapping icon names to icon components
const iconMap = {
  IoCodeSlash,
  IoServerOutline,
  IoLogoAmazon,
  IoDesktopOutline,
  IoConstructOutline,
  IoReceiptOutline,
};

export default function Skills({ title, content }) {
  return (
    <section className="pt-16">
      <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
        <IoColorWandOutline className="mr-3" />
        {title}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {content.map((category, index) => {
          // Get map icon component using icon name
          const IconComponent =
            iconMap[category.iconName] || IoColorWandOutline;

          return (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="mb-4 flex items-center text-lg font-bold text-teal-800 dark:text-teal-200">
                <IconComponent className="mr-2 text-xl" />
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-teal-200 px-3 py-1 text-sm font-medium text-teal-900 transition-colors hover:bg-teal-400 dark:bg-teal-800 dark:text-teal-100 dark:hover:bg-teal-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
