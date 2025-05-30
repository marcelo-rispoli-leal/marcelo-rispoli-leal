import { IoIdCardOutline } from "react-icons/io5";

// Sub-component for rendering each experience
function Experience({ experience }) {
  // Destructure with default values to prevent errors if fields are missing
  const {
    title = "N/A",
    company = "N/A",
    period = "N/A",
    clients,
    highlight,
    activities = [],
  } = experience;

  return (
    <div className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 shadow-lg dark:border-teal-300 dark:bg-neutral-700">
      <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
        <div>
          <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">
            {title}
          </h3>
          <p className="text-lg font-semibold text-teal-700 dark:text-teal-300">
            {company}
          </p>
        </div>
        <span className="mt-2 text-sm font-medium text-neutral-700 md:mt-0 dark:text-neutral-300">
          {period}
        </span>
      </div>

      {clients && (
        <div className="mb-4 rounded-md bg-teal-200 p-3 dark:bg-teal-800">
          <p className="text-sm">
            <strong className="text-teal-700 dark:text-teal-300">
              {clients.label}
            </strong>
            {": "}
            <span className="text-teal-900 dark:text-teal-100">
              {clients.content}
            </span>
          </p>
        </div>
      )}

      {highlight && (
        <div className="mb-4 rounded-md border border-teal-700 bg-emerald-200 p-4 dark:border-teal-300 dark:bg-emerald-800">
          <p className="text-sm">
            <span className="text-emerald-900 dark:text-emerald-100">
              {highlight}
            </span>
          </p>
        </div>
      )}

      {activities.length > 0 && (
        <ul className="space-y-2">
          {activities.map((activity, actIndex) => (
            <li key={actIndex} className="flex items-start">
              <span className="mt-1 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-700 dark:bg-teal-300"></span>
              <span className="text-teal-950 dark:text-teal-50">
                {activity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [sectionTitle, setSectionTitle] = useState(""); // Novo estado para o título
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useThemeContext();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        // Adicionar '/api' antes de '/graduations'
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/experiences?lang=${language}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const { content, title } = await response.json(); // 'title' aqui é o título da seção
        setExperiences(content);
        setSectionTitle(title); // Definir o título da seção
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchExperiences();
  }, [apiBaseUrl, language]);

  if (loading) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            Loading professional experiences...
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
            Error loading experiences: {error}
          </p>
        </div>
      </section>
    );
  }

  if (experiences.length === 0) {
    return (
      <section className="pt-16">
        <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-xl text-neutral-700 dark:text-neutral-300">
            No professional experiences found.
          </p>
        </div>
      </section>
    );
  } */
export default function Experiences({ title, content }) {
  return (
    <section className="pt-16">
      <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
        <IoIdCardOutline className="mr-3" />
        {title}
      </h2>

      <div className="space-y-8">
        {content.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}
