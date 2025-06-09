import { IoSchoolOutline } from "react-icons/io5";

export default function Graduations({ title, content }) {
  return (
    <section className="pt-16">
      <h2 className="mb-12 text-2xl text-teal-700 md:text-3xl xl:text-4xl dark:text-teal-300">
        <IoSchoolOutline className="mr-1" />
        {title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {content.map((edu, index) => (
          <div
            key={index}
            className="rounded-lg border-l-4 border-teal-700 bg-neutral-300 p-4 dark:border-teal-300 dark:bg-neutral-700"
          >
            <h3 className="text-md font-bold text-teal-800 md:text-lg xl:text-xl dark:text-teal-200">
              {edu.title}
            </h3>
            <p className="md:text-md text-sm font-semibold text-teal-700 xl:text-lg dark:text-teal-300">
              {edu.institution}
            </p>
            <p className="xl:text-md mt-2 text-xs text-teal-950 md:text-sm dark:text-teal-50">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
