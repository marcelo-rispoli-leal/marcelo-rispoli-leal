import {
  IoStarOutline,
  IoBusinessOutline,
  IoSync,
  IoLogoAmazon,
  IoLibraryOutline,
  IoStorefrontOutline,
  IoLanguage,
} from "react-icons/io5";

// Mapping icon names to icon components
const iconMap = {
  IoBusinessOutline,
  IoSync,
  IoLogoAmazon,
  IoLibraryOutline,
  IoStorefrontOutline,
  IoLanguage,
};

export default function Highlights({ title, content }) {
  return (
    <section className="py-16">
      <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
        <IoStarOutline className="mr-3" />
        {title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {content.map((highlight, index) => {
          // Get map icon component using icon name
          const IconComponent = iconMap[highlight.iconName] || IoStarOutline;

          return (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="mb-4 flex items-center text-lg font-bold text-teal-800 dark:text-teal-200">
                <IconComponent className="mr-2 text-xl" />
                {highlight.title}
              </h3>
              <p className="text-sm text-teal-950 dark:text-teal-50">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
