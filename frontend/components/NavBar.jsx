// NavBar dependencies
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import IconLink from "./IconLink";
import ThemeToggler from "./ThemeToggler";
import LanguageSelector from "./LanguageSelector";
// Constants from .env to set the NavBar IconLinks
const { VITE_EMAIL, VITE_GITHUB, VITE_LINKEDIN } = import.meta.env;
// Classes for the NavBar IconLinks
const iconClasses = "h-full w-full";
// prettier-ignore
// Export the NavBar for import into the App
export default function NavBar() {
  return (
    <div
      role="navigation"
      className="3xl:h-[60px] 4xl:h-[72px] 3xl:gap-x-[10px] 4xl:gap-x-[12px] inline-flex h-[48px] w-full justify-end gap-x-[8px]"
    >
      {VITE_EMAIL && (<IconLink icon={<IoMailOutline className={iconClasses} />} link={`mailto:${VITE_EMAIL}`} />)}
      {VITE_GITHUB && (<IconLink icon={<IoLogoGithub className={iconClasses} />} link={VITE_GITHUB} />)}
      {VITE_LINKEDIN && (<IconLink icon={<IoLogoLinkedin className={iconClasses} />} link={VITE_LINKEDIN} />)}
      <ThemeToggler />
      <LanguageSelector />
    </div>
  );
}
