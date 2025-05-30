import { IoCafe } from "react-icons/io5";

function getYear() {
  const today = new Date();
  return today.getFullYear();
}

export default function Footer({ complement, closing }) {
  return (
    <>
      <p className="text-sm">
        © {getYear()} {document.title}. {complement}
      </p>
      <p className="mt-2 inline-flex items-end text-xs opacity-75">
        {closing}
        <IoCafe className="ml-0.75 text-sm" />
      </p>
    </>
  );
}
