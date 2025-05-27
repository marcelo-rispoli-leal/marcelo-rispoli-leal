import { useEffect, useState } from "react";
import { IoSchoolOutline } from "react-icons/io5";

export default function Graduations() {
  const [graduations, setGraduations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function fetchGraduations() {
      if (!apiBaseUrl) {
        setError(
          "API base URL não configurada. Por favor, defina VITE_API_BASE_URL no seu .env.local.",
        );
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`${apiBaseUrl}/api/graduations`);
        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        setGraduations(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchGraduations();
  }, [apiBaseUrl]);

  if (loading) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Carregando formações acadêmicas...
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
            Erro ao carregar formações: {error}
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
            Nenhuma formação encontrada.
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
          Formação Acadêmica
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {graduations.map((edu, index) => (
            <div
              key={edu._id || index}
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
