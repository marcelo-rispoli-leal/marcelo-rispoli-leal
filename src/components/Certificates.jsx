import { IoTrophyOutline } from "react-icons/io5";

export default function Certificates({ title, content }) {
  return (
    <section className="pt-16">
      <h2 className="mb-12 inline-flex w-full justify-center text-center text-4xl font-bold text-teal-700 dark:text-teal-300">
        <IoTrophyOutline className="mr-3" />
        {title}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {content.map((cert, index) => (
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
    </section>
  );
}
