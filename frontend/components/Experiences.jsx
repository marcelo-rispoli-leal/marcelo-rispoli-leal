import { useEffect, useState } from "react";
import { IoIdCardOutline } from "react-icons/io5";

// Sub-component for rendering each experience
function Experience({ experience }) {
  // Destructure with default values to prevent errors if fields are missing
  const {
    title = "N/A",
    company = "N/A",
    period = "N/A",
    clients,
    highlight,
    activities = [],
  } = experience;

  return (
    <div className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700">
      <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
        <div>
          <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">
            {title}
          </h3>
          <p className="text-lg font-semibold text-teal-700 dark:text-teal-300">
            {company}
          </p>
        </div>
        <span className="mt-2 text-sm font-medium text-neutral-700 md:mt-0 dark:text-neutral-300">
          {period}
        </span>
      </div>

      {clients && (
        <div className="mb-4 rounded-md bg-teal-200 p-3 dark:bg-teal-800">
          <p className="text-sm">
            <strong className="text-teal-700 dark:text-teal-300">
              {clients.includes(",") ? "Main Clients: " : "Main Client: "}
            </strong>{" "}
            <span className="text-teal-900 dark:text-teal-100">{clients}</span>
          </p>
        </div>
      )}

      {highlight && (
        <div className="mb-4 rounded-md border border-teal-700 bg-emerald-200 p-4 dark:border-teal-300 dark:bg-emerald-800">
          <p className="text-sm">
            <strong className="text-emerald-700 dark:text-emerald-300">
              {highlight.split(":")[0]}:
            </strong>{" "}
            <span className="text-emerald-900 dark:text-emerald-100">
              {highlight.split(":").slice(1).join(":").trim()}
            </span>
          </p>
        </div>
      )}

      {activities.length > 0 && (
        <ul className="space-y-2">
          {activities.map((activity, actIndex) => (
            <li key={actIndex} className="flex items-start">
              <span className="mt-1 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-700 dark:bg-teal-300"></span>
              <span className="text-teal-950 dark:text-teal-50">
                {activity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vite exposes env variables on import.meta.env
  // VITE_API_BASE_URL should be defined in your .env.local file (e.g., VITE_API_BASE_URL=http://localhost:3001)
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function fetchExperiences() {
      if (!apiBaseUrl) {
        setError(
          "API base URL is not configured. Please set VITE_API_BASE_URL in your .env.local file.",
        );
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${apiBaseUrl}/api/experiences`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExperiences(data);
      } catch (e) {
        console.error("Failed to fetch experiences:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, [apiBaseUrl]); // Re-run effect if apiBaseUrl changes (though it shouldn't in this context)

  if (loading) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Loading professional experiences...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-red-600 dark:text-red-400">
            Error loading experiences: {error}
          </p>
        </div>
      </section>
    );
  }

  if (experiences.length === 0) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            No professional experiences found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoIdCardOutline className="mr-3" />
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            // Use MongoDB's _id as the key for better performance and stability
            <Experience key={exp._id || exp.title} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
