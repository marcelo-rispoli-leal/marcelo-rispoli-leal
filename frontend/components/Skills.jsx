import { useEffect, useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import {
  IoColorWandOutline,
  IoCodeSlash,
  IoServerOutline,
  IoCloudOutline,
  IoDesktopOutline,
  IoConstructOutline,
  IoReceiptOutline,
} from "react-icons/io5";

// Mapping icon names to icon components
const iconMap = {
  IoCodeSlash,
  IoServerOutline,
  IoCloudOutline,
  IoDesktopOutline,
  IoConstructOutline,
  IoReceiptOutline,
};

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useThemeContext();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/skills?lang=${language}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const { content, title } = await response.json();
        setSkillCategories(content);
        setSectionTitle(title);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchSkills();
  }, [apiBaseUrl, language]);

  if (loading) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Loading technical skills...
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
            Error loading skills: {error}
          </p>
        </div>
      </section>
    );
  }

  if (skillCategories.length === 0) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            No technical competence found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoColorWandOutline className="mr-3" />
          {sectionTitle}
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
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
      </div>
    </section>
  );
}
