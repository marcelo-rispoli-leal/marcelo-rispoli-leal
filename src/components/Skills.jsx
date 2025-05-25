export default function Skills() {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: "💻",
      skills: [
        "Oracle PL/SQL",
        "JavaScript",
        "Node.js",
        "React.js",
        "Express.js",
        "HTML/CSS",
        "ASP.NET",
        "C#",
        "Java",
        "T-SQL",
      ],
    },
    {
      title: "Bancos de Dados",
      icon: "🗄️",
      skills: [
        "Oracle",
        "SQL Server",
        "PostgreSQL",
        "MongoDB",
        "Access",
        "MySQL",
      ],
    },
    {
      title: "Cloud & Ferramentas AWS",
      icon: "☁️",
      skills: [
        "Amazon QuickSight",
        "AWS Glue",
        "Amazon Redshift",
        "Amazon Athena",
        "Amazon S3",
        "AWS StepFunctions",
        "AWS Secrets Manager",
      ],
    },
    {
      title: "Sistemas Fiscais e ERP",
      icon: "📊",
      skills: ["Oracle EBS", "SAP R/3", "Tasy", "Synchro Soluções Fiscais"],
    },
    {
      title: "Ferramentas de Desenvolvimento",
      icon: "🛠️",
      skills: [
        "Tailwind",
        "VS Code",
        "Cursor",
        "Trae",
        "Vite",
        "Git",
        "GitHub",
        "Linux",
        "MS-DOS",
        "GIMP",
        "Visual Studio",
      ],
    },
    {
      title: "Declarações Fiscais",
      icon: "📋",
      skills: [
        "ECD",
        "ECF",
        "EFD Contribuições",
        "EFD ICMS/IPI",
        "EFD REINF",
        "NFe/CTe/NFSe",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 dark:bg-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          <span className="mr-3 text-emerald-600">🚀</span>
          Competências Técnicas
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border-t-4 border-emerald-600 bg-neutral-50 p-6 shadow-lg dark:bg-neutral-700"
            >
              <h3 className="mb-4 flex items-center text-lg font-bold text-neutral-900 dark:text-neutral-100">
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
