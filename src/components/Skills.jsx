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
    <section id="skills" className="break-before-page pt-16">
      {/* <div className="break-before-page"> */}
      <h2 className="mb-12 text-2xl text-teal-700 md:text-3xl xl:text-4xl dark:text-teal-300">
        <IoColorWandOutline className="mr-1" />
        {title}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.map((category, index) => {
          // Get map icon component using icon name
          const IconComponent = iconMap[category.iconName];

          return (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="text-md mb-2 flex items-center font-bold text-teal-800 md:text-lg xl:text-xl dark:text-teal-200">
                <IconComponent className="mr-1" />
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="xl:text-md rounded-full bg-teal-200 px-3 py-1 text-xs font-medium text-teal-900 transition-colors hover:bg-teal-400 md:text-sm dark:bg-teal-800 dark:text-teal-100 dark:hover:bg-teal-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </section>
  );
}
