import { useEffect, useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { IoTrophyOutline } from "react-icons/io5";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useThemeContext();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/certificates?lang=${language}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const { content, title } = await response.json();
        setCertificates(content);
        setSectionTitle(title);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCertificates();
  }, [apiBaseUrl, language]);

  if (loading) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Loading certificates...
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
            Error loading certificates: {error}
          </p>
        </div>
      </section>
    );
  }

  if (certificates.length === 0) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            No certificate found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoTrophyOutline className="mr-3" />
          {sectionTitle}
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">
                {cert.title}
              </h3>
              <p className="text-teal-950 dark:text-teal-50">{cert.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
