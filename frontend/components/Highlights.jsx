import {
  IoStarOutline,
  IoBusinessOutline,
  IoSync,
  IoLogoAmazon,
  IoLibraryOutline,
  IoStorefrontOutline,
  IoLanguage,
} from "react-icons/io5";

export default function Highlights() {
  const highlights = [
    {
      title: "Grandes Corporações",
      icon: IoBusinessOutline,
      description: "Histórico de projetos bem-sucedidos em grandes empresas",
    },
    {
      title: "Integração de Sistemas",
      icon: IoSync,
      description:
        "Experiência consolidada em integração entre ERPs e sistemas fiscais",
    },
    {
      title: "Amazon AWS",
      icon: IoLogoAmazon,
      description:
        "Experiência prática em lidar com ferramentas e grande volumes de dados em nuvem",
    },
    {
      title: "Expertise Fiscal",
      icon: IoLibraryOutline,
      description:
        "Conhecimento profundo da legislação tributária brasileira e sistemas de compliance",
    },
    {
      title: "Trabalho Remoto",
      icon: IoStorefrontOutline,
      description:
        "Adaptado e experiente em trabalho remoto com equipes distribuídas",
    },
    {
      title: "Inglês",
      icon: IoLanguage,
      description:
        "Conhecimento técnico em inglês para programação, documentação e comunicação",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoStarOutline className="mr-3" />
          Principais Diferenciais
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            return (
              <div
                key={index}
                className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
              >
                <h3 className="mb-4 flex items-center text-lg font-bold text-teal-800 dark:text-teal-200">
                  <highlight.icon className="mr-2 text-xl" />
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
