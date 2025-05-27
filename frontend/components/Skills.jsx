import {
  IoColorWandOutline,
  IoCodeSlash,
  IoServerOutline,
  IoCloudOutline,
  IoDesktopOutline,
  IoConstructOutline,
  IoReceiptOutline,
} from "react-icons/io5";

export default function Skills() {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: IoCodeSlash,
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
      title: "Cloud & Ferramentas AWS",
      icon: IoCloudOutline,
      skills: [
        "Amazon QuickSight",
        "AWS Glue",
        "Amazon Redshift",
        "Amazon Athena",
        "Amazon S3",
        "AWS StepFunctions",
      ],
    },
    {
      title: "Ferramentas de Desenvolvimento",
      icon: IoConstructOutline,
      skills: [
        "Tailwind",
        "VS Code",
        "Cursor",
        "Trae",
        "Vite",
        "GitHub",
        "Excel",
        "Linux",
        "MS-DOS",
        "GIMP",
        "Visual Studio",
      ],
    },
    {
      title: "Bancos de Dados",
      icon: IoServerOutline,
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
      title: "Sistemas Fiscais e ERP",
      icon: IoDesktopOutline,
      skills: ["Oracle EBS", "SAP R/3", "Tasy", "Synchro Soluções Fiscais"],
    },
    {
      title: "Declarações Fiscais",
      icon: IoReceiptOutline,
      skills: [
        "EFD Contribuições",
        "EFD ICMS/IPI",
        "ECD",
        "ECF",
        "EFD REINF",
        "NFe/CTe/NFSe",
      ],
    },
  ];

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoColorWandOutline className="mr-3" />
          Competências Técnicas
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
            >
              <h3 className="mb-4 flex items-center text-lg font-bold text-teal-800 dark:text-teal-200">
                <category.icon className="mr-2 text-xl" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
