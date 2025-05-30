import { useAppContext } from "../hooks/useAppContext";

export default function ToggleLanguage() {
  const { language, toggleLanguage } = useAppContext();

  return (
    <select
      value={language}
      onChange={(e) => toggleLanguage(e.target.value)}
      className="3xl:w-[70px] 4xl:w-[84px] 3xl:rounded-[15px] 4xl:rounded-[18px] b-std h-full w-[56px] rounded-[12px] bg-neutral-300 px-2 transition-colors hover:bg-teal-700 dark:bg-neutral-700 dark:text-neutral-100"
    >
      <option value="pt">PT</option>
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}
