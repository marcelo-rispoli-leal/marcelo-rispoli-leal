import { useEffect, useState } from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { useThemeContext } from "../hooks/useThemeContext";

export default function Graduations() {
  const [graduations, setGraduations] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const { language } = useThemeContext();

  useEffect(() => {
    const fetchGraduations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/graduations?lang=${language}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const { content, title } = await response.json();
        setGraduations(content);
        setSectionTitle(title);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchGraduations();
  }, [apiBaseUrl, language]);

  if (loading) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Loading academic backgrounds...
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
            Error loading academic backgrounds: {error}
          </p>
        </div>
      </section>
    );
  }

  if (graduations.length === 0) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            No academic background found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoSchoolOutline className="mr-3" />
          {sectionTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {graduations.map((edu, index) => (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">
                {edu.title}
              </h3>
              <p className="text-lg font-semibold text-teal-700 dark:text-teal-300">
                {edu.institution}
              </p>
              <p className="mt-1 text-teal-950 dark:text-teal-50">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
