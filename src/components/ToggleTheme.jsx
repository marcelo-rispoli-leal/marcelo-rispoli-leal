// ToggleTheme dependencies
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useAppContext } from "../hooks/useAppContext";
// Exports the ToggleTheme to import in the NavBar
export default function ToggleTheme() {
  const { isDarkTheme, toggleTheme } = useAppContext();
  // Returns the ToggleTheme component
  return (
    <button
      onClick={toggleTheme}
      className="3xl:w-[60px] 3xl:rounded-[15px] 3xl:p-[10px] 4xl:w-[72px] 4xl:rounded-[18px] 4xl:p-[12px] b-std h-full w-[48px] rounded-[12px] bg-neutral-300 p-[8px] transition-colors hover:bg-teal-700 dark:bg-neutral-700"
      role="switch"
      aria-label={
        isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {isDarkTheme ? (
        <IoSunnyOutline className="h-full w-full" />
      ) : (
        <IoMoonOutline className="h-full w-full rotate-[18deg]" />
      )}
    </button>
  );
}
