import { useEffect, useState } from "react";

export default function Carousel() {
  const companies = [
    { name: "Amazon", logo: "🛒" },
    { name: "Philips", logo: "💡" },
    { name: "Tramontina", logo: "🍳" },
    { name: "Coca-Cola", logo: "🥤" },
    { name: "Azul", logo: "✈️" },
    { name: "Dufry", logo: "🛍️" },
    { name: "FGV", logo: "🎓" },
    { name: "Exterran", logo: "⚡" },
  ];

  const technologies = [
    { name: "Oracle", logo: "🔴" },
    { name: "AWS", logo: "☁️" },
    { name: "React", logo: "⚛️" },
    { name: "JavaScript", logo: "🟨" },
    { name: "Node.js", logo: "🟢" },
    { name: "SAP", logo: "🔵" },
    { name: "Synchro", logo: "🔄" },
    { name: "Git", logo: "📝" },
  ];

  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const companyInterval = setInterval(() => {
      setCurrentCompanyIndex((prev) => (prev + 1) % companies.length);
    }, 3000);

    const techInterval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
    }, 2500);

    return () => {
      clearInterval(companyInterval);
      clearInterval(techInterval);
    };
  }, [companies.length, technologies.length]);

  return (
    <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16 dark:from-teal-900/20 dark:to-emerald-900/20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          <span className="mr-3 text-teal-600">🏢</span>
          Empresas & Tecnologias
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Empresas */}
          <div className="text-center">
            <h3 className="mb-8 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
              Empresas onde trabalhei
            </h3>

            <div className="relative h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform transition-all duration-500 ease-in-out">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-lg dark:bg-neutral-700">
                    {companies[currentCompanyIndex].logo}
                  </div>
                  <p className="mt-3 text-lg font-medium text-neutral-700 dark:text-neutral-300">
                    {companies[currentCompanyIndex].name}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              {companies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCompanyIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentCompanyIndex
                      ? "bg-teal-600"
                      : "bg-neutral-300 dark:bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {companies.map((company, index) => (
                <span
                  key={index}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    index === currentCompanyIndex
                      ? "bg-teal-600 text-white"
                      : "bg-white text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tecnologias */}
          <div className="text-center">
            <h3 className="mb-8 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
              Principais Tecnologias
            </h3>

            <div className="relative h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform transition-all duration-500 ease-in-out">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-lg dark:bg-neutral-700">
                    {technologies[currentTechIndex].logo}
                  </div>
                  <p className="mt-3 text-lg font-medium text-neutral-700 dark:text-neutral-300">
                    {technologies[currentTechIndex].name}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTechIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentTechIndex
                      ? "bg-emerald-600"
                      : "bg-neutral-300 dark:bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    index === currentTechIndex
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
