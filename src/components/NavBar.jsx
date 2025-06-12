// NavBar dependencies
import IconLink from "./IconLink";
import ToggleTheme from "./ToggleTheme";
import ToggleLanguage from "./ToggleLanguage";
import {
  IoMailOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoPrintOutline,
} from "react-icons/io5";
// Classes for the NavBar IconLinks
const iconClasses = "h-full w-full";
// prettier-ignore
// Export the NavBar for import into the App
export default function NavBar({email, linkedin, github}) {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div
      role="navigation"
      className="3xl:h-[60px] 4xl:h-[72px] 3xl:gap-x-[10px] 4xl:gap-x-[12px] inline-flex h-[48px] w-full justify-end gap-x-[8px]"
    >
      <button
        onClick={handlePrint}
        className="h-full rounded-[12px] b-std p-2 transition-colors hover:bg-teal-700 dark:hover:bg-teal-500 bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 aspect-square"
        aria-label="Print page"
      >
        <IoPrintOutline className={iconClasses} />
      </button>
      <IconLink icon={<IoMailOutline className={iconClasses} />} link={`${email.prefix}${email.text}`} />
      <IconLink icon={<IoLogoLinkedin className={iconClasses} />} link={`${linkedin.prefix}${linkedin.text}`} />
      <IconLink icon={<IoLogoGithub className={iconClasses} />} link={`${github.prefix}${github.text}`} />
      <ToggleTheme />
      <ToggleLanguage />
    </div>
  );
}
