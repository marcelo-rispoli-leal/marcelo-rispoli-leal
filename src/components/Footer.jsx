import { IoCafe } from "react-icons/io5";

function getYear() {
  const today = new Date();
  return today.getFullYear();
}

export default function Footer({ complement, closing }) {
  return (
    <div>
      <div className="grid grid-rows-2 text-sm md:grid-cols-2 md:grid-rows-1">
        <span className="md:mr-[2px] md:inline-flex md:justify-end">
          © {getYear()} {document.title}.
        </span>
        <span className="md:ml-[2px] md:inline-flex md:justify-start">
          {complement}
        </span>
      </div>
      <p className="mt-2 inline-flex items-end text-xs opacity-75">
        {closing}
        <IoCafe className="ml-[4px]" />
      </p>
    </div>
  );
}
