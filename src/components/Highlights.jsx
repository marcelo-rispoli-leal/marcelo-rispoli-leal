import {
  IoStarOutline,
  IoBusinessOutline,
  IoSync,
  IoCloudOutline,
  IoLibraryOutline,
  IoStorefrontOutline,
  IoLanguage,
} from "react-icons/io5";

// Mapping icon names to icon components
const iconMap = {
  IoBusinessOutline,
  IoSync,
  IoCloudOutline,
  IoLibraryOutline,
  IoStorefrontOutline,
  IoLanguage,
};

export default function Highlights({ title, content }) {
  return (
    <section id="highlights" className="break-before-page py-16">
      <h2 className="mb-12 text-2xl text-teal-700 md:text-3xl xl:text-4xl dark:text-teal-300">
        <IoStarOutline className="mr-1" />
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.map((highlight, index) => {
          // Get map icon component using icon name
          const IconComponent = iconMap[highlight.iconName] || IoStarOutline;

          return (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="text-md mb-2 flex items-center font-bold text-teal-800 md:text-lg xl:text-xl dark:text-teal-200">
                <IconComponent className="mr-1" />
                {highlight.title}
              </h3>
              <p className="xl:text-md text-xs text-teal-950 md:text-sm dark:text-teal-50">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
