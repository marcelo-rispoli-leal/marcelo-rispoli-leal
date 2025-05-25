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
    <section className="bg-neutral-50 py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          <span className="mr-3 text-teal-600">💼</span>
          Experiência Profissional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border-l-4 border-teal-600 bg-white p-6 shadow-lg dark:bg-neutral-800"
            >
              <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-teal-600">
                    {exp.company}
                  </p>
                </div>
                <span className="mt-2 text-sm font-medium text-neutral-600 md:mt-0 dark:text-neutral-400">
                  {exp.period}
                </span>
              </div>

              {exp.clients && (
                <div className="mb-4 rounded-md bg-teal-50 p-3 dark:bg-teal-900/20">
                  <p className="text-sm">
                    <strong className="text-teal-700 dark:text-teal-300">
                      {exp.clients.includes(",")
                        ? "Principais Clientes: "
                        : "Principal Cliente: "}
                    </strong>{" "}
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {exp.clients}
                    </span>
                  </p>
                </div>
              )}

              {exp.highlight && (
                <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
                    {exp.highlight}
                  </p>
                </div>
              )}

              <ul className="space-y-2">
                {exp.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-start">
                    <span className="mt-1 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600"></span>
                    <span className="text-neutral-700 dark:text-neutral-300">
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
