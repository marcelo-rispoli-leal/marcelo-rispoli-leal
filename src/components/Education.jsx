import { IoSchoolOutline } from "react-icons/io5";
export default function Education() {
  const education = [
    {
      title: "Bacharel em Ciências Contábeis",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      period: "1997 - 2001",
      type: "graduation",
    },
    {
      title: "Ensino Médio e Fundamental",
      institution: "Colégio Anchieta - Porto Alegre",
      period: "1986 - 1996",
      type: "school",
    },
  ];

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoSchoolOutline className="mr-3" />
          Formação Acadêmica
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu, index) => {
            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
