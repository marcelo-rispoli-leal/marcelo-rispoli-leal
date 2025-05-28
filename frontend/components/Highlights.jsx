import { useEffect, useState } from "react";
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

export default function Highlights() {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function fetchHighlights() {
      if (!apiBaseUrl) {
        setError(
          "API base URL not set. Please define VITE_API_BASE_URL in your .env.local.",
        );
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${apiBaseUrl}/api/highlights`);
        if (!response.ok) {
          throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const data = await response.json();
        setHighlights(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHighlights();
  }, [apiBaseUrl]);

  if (loading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Loading highlights...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-red-600 dark:text-red-400">
            Error loading highlights: {error}
          </p>
        </div>
      </section>
    );
  }

  if (highlights.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            No highlights found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoStarOutline className="mr-3" />
          Principais Diferenciais
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            // Get map icon component using icon name
            const IconComponent = iconMap[highlight.iconName] || IoStarOutline;

            return (
              <div
                key={highlight._id || index}
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
      </div>
    </section>
  );
}
