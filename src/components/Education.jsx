export default function Education() {
  const education = [
    {
      title: "Bacharel em Ciências Contábeis",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      year: "1997 - 2001",
      type: "graduation",
    },
    {
      title: "Ensino Médio e Fundamental",
      institution: "Colégio Anchieta - Porto Alegre",
      year: "1986 - 1996",
      type: "school",
    },
  ];

  const certifications = [
    {
      title: "Bootcamp Desenvolvedor Full Stack",
      institution: "IGTI",
      year: "2020",
      details: "148h • Pontuação: 500/500",
    },
    {
      title: "Scrum Foundation Professional Certificate",
      institution: "CertiProf",
      year: "2020",
      details: "",
    },
    {
      title: "Selos de Competência LinkedIn",
      institution: "LinkedIn",
      year: "2020-2024",
      details: "Excel, CSS, JSON, JavaScript, MongoDB",
    },
  ];

  const highlights = [
    "Amazon AWS: Experiência prática em lidar com ferramentas e grande volumes de dados em nuvem",
    "Expertise Fiscal: Conhecimento profundo da legislação tributária brasileira e sistemas de compliance",
    "Integração de Sistemas: Experiência consolidada em integração entre ERPs e sistemas fiscais",
    "Grandes Corporações: Histórico de projetos bem-sucedidos em empresas multinacionais",
    "Trabalho Remoto: Adaptado e experiente em trabalho remoto com equipes distribuídas",
    "Inglês: Conhecimento técnico em inglês para programação, documentação e comunicação",
  ];

  return (
    <section className="bg-neutral-50 py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Formação Acadêmica */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              <span className="mr-3 text-teal-600">🎓</span>
              Formação Acadêmica
            </h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"
                >
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {edu.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm font-medium text-teal-600">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              <span className="mr-3 text-emerald-600">🏆</span>
              Certificações
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-lg border-l-4 border-emerald-600 bg-white p-4 shadow-lg dark:bg-neutral-800"
                >
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {cert.institution} • {cert.year}
                  </p>
                  {cert.details && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {cert.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Destaques */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            <span className="mr-3 text-teal-600">⭐</span>
            Principais Diferenciais
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => {
              const [title, description] = highlight.split(": ");
              return (
                <div
                  key={index}
                  className="rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 p-4 dark:from-teal-900/20 dark:to-emerald-900/20"
                >
                  <h3 className="font-bold text-teal-700 dark:text-teal-300">
                    {title}:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
