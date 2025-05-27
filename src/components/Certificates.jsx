import { IoTrophyOutline } from "react-icons/io5";
export default function Certificates() {
  const certificates = [
    {
      title: "Jornada Full Stack",
      details: "Hashtag • 2025 • 8h",
    },
    {
      title: "Desenvolvedor Full Stack",
      details: "IGTI • 2020 • 148h • Pontuação: 500/500",
    },
    {
      title: "Scrum Foundation Professional Certificate",
      details: "CertiProf • 2020",
    },
    {
      title: "Selos de Competência LinkedIn",
      details: "Excel, CSS, JSON, JavaScript, MongoDB",
    },
    {
      title: "Desenvolvimento de Sistemas",
      details: "Escola Virtual Bradesco • 2020 • 45h",
    },
    {
      title: "Governança de TI",
      details: "Escola Virtual Bradesco • 2020 • 44h",
    },
    {
      title: "Administrando Banco de Dados",
      details: "Escola Virtual Bradesco • 2020 • 15h",
    },
    {
      title: "Modelagem de Dados",
      details: "Escola Virtual Bradesco • 2020 • 12h",
    },
    {
      title: "Certificação Synchro NFSe",
      details: "Synchro Sistemas • 2017 • 8h",
    },
    {
      title: "Treinamento Técnico Synchro",
      details: "Synchro Sistemas • 2010 • 40h",
    },
    {
      title: "Treinamento Funcional Synchro",
      details: "Synchro Sistemas • 2008 • 88h",
    },
  ];

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoTrophyOutline className="mr-3" />
          Certificações
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
