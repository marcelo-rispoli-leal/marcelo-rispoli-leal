import { IoTrophyOutline } from "react-icons/io5";

export default function Certificates({ title, content }) {
  return (
    <section className="pt-16">
      <h2 className="mb-12 text-2xl text-teal-700 md:text-3xl xl:text-4xl dark:text-teal-300">
        <IoTrophyOutline className="mr-1" />
        {title}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.map((cert, index) => (
          <div
            key={index}
            className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 dark:border-teal-300 dark:bg-neutral-700"
          >
            <h3 className="mb-2 font-bold text-teal-800 md:text-lg xl:text-xl dark:text-teal-200">
              {cert.title}
            </h3>
            <p className="xl:text-md text-xs text-teal-950 md:text-sm dark:text-teal-50">
              {cert.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
