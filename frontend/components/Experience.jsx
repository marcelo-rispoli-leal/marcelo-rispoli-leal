import { IoIdCardOutline } from "react-icons/io5";

export default function Experience() {
  const experiences = [
    {
      title: "Consultor Técnico e Funcional Synchro",
      company: "Ninecon Consultores Associados",
      period: "Fev/2022 - Mar/2025",
      clients: "Amazon, Dufry, Azul, Exterran e FGV",
      highlight:
        "Projeto Destaque - Amazon: Desempenhou papel chave no projeto de recuperação de créditos fiscais sobre ativos, desenvolvendo workflows complexos integrando Synchro, Oracle EBS e ferramentas AWS (Redshift, Athena, S3, Glue, QuickSight, StepFunctions).",
      activities: [
        "Desenvolvimento de workflows de integração de dados entre Oracle EBS, Synchro e S3 através do Redshift e Athena",
        "Criação de dashboards analíticos no QuickSight para visualização de dados fiscais e contábeis",
        "Customização de Open Interfaces Synchro para automação de processos",
        "Validação da apuração e declaração de impostos",
        "Suporte técnico Synchro avançado para grandes contas corporativas",
      ],
    },
    {
      title: "Desenvolvedor de Sistemas ERP",
      company: "Meta Serviços em Informática",
      period: "Jan/2021 - Jan/2022",
      clients: "Philips Healthcare",
      activities: [
        "Desenvolvimento de relatórios e funcionalidades no sistema ERP Tasy",
        "Programação em Oracle PL/SQL, JavaScript e Java",
        "Análise e otimização de performance de consultas",
      ],
    },
    {
      title: "Consultor Técnico e Funcional Synchro",
      company: "Gesif Consultores (Abreu & Damé)",
      period: "Jun/2008 - Ago/2013 | Jan/2015 - Jan/2020",
      clients:
        "Tramontina, Lojas Benoit, Paquetá Calçados, Procergs, TAP, Dana Albarus, Bettanin, Dell",
      activities: [
        "Implementação, manutenção e customização de soluções fiscais Synchro",
        "Desenvolvimento avançado em Oracle PL/SQL (packages, procedures, functions, triggers, indexes, external tables)",
        "Atendimento a integrações SAP, Oracle EBS e a Open Interfaces Synchro",
        "Cálculo e apuração dos impostos ICMS, IPI, PIS, COFINS, IR, CSLL, INSS e ISS",
        "Geração e validação de obrigações contábeis e fiscais (EFD ICMS/IPI, EFD Contribuições, ECD, ECF, REINF e GIAs Estaduais)",
        "Elaboração de manuais, planilhas e documentação de atividades",
        "Treinamento técnico e funcional de equipes",
      ],
    },
    {
      title: "Analista Contábil Fiscal",
      company: "Vonpar Refrescos S/A (Coca-Cola)",
      period: "Nov/2000 - Dez/2003",
      activities: [
        "Apuração de impostos federais e estaduais (IPI, ICMS, PIS/COFINS)",
        "Operação do sistema SAP R/3 para processos fiscais",
        "Controle de operações fiscais multi-unidades",
        "Emissão e controle de documentos fiscais",
      ],
    },
  ];

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
          <IoIdCardOutline className="mr-3" />
          Experiência Profissional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700"
            >
              <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-teal-700 dark:text-teal-300">
                    {exp.company}
                  </p>
                </div>
                <span className="mt-2 text-sm font-medium text-neutral-700 md:mt-0 dark:text-neutral-300">
                  {exp.period}
                </span>
              </div>

              {exp.clients && (
                <div className="mb-4 rounded-md bg-teal-200 p-3 dark:bg-teal-800">
                  <p className="text-sm">
                    <strong className="text-teal-700 dark:text-teal-300">
                      {exp.clients.includes(",")
                        ? "Principais Clientes: "
                        : "Principal Cliente: "}
                    </strong>{" "}
                    <span className="text-teal-900 dark:text-teal-100">
                      {exp.clients}
                    </span>
                  </p>
                </div>
              )}

              {exp.highlight && (
                <div className="mb-4 rounded-md border border-teal-700 bg-emerald-200 p-4 dark:border-teal-300 dark:bg-emerald-800">
                  <p className="text-sm">
                    <strong className="text-emerald-700 dark:text-emerald-300">
                      {exp.highlight.split(":")[0]}:
                    </strong>{" "}
                    <span className="text-emerald-900 dark:text-emerald-100">
                      {exp.highlight.split(":")[1]}
                    </span>
                  </p>
                </div>
              )}

              <ul className="space-y-2">
                {exp.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-start">
                    <span className="mt-1 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-700 dark:bg-teal-300"></span>
                    <span className="text-teal-950 dark:text-teal-50">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
