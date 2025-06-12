// NavBar dependencies
import PrintButton from "./PrintButton";
import IconLink from "./IconLink";
import ToggleTheme from "./ToggleTheme";
import ToggleLanguage from "./ToggleLanguage";
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
// Classes for the NavBar PrintButton and IconLinks
const iconClasses = "h-full w-full";
// prettier-ignore
// Export the NavBar for import into the App
export default function NavBar({ email, linkedin, github, isH1Visible }) {
  return (
    <div
      className={`3xl:h-[60px] 4xl:h-[72px] inline-flex h-[48px] w-full ${!isH1Visible && "md:grid md:grid-cols-2 md:justify-stretch"}`}
    >
      <div
        className={`hidden md:justify-start md:text-[48px] md:font-bold ${!isH1Visible && "md:inline-flex"}`}
      >
        {document.title}
      </div>
      <div
        role="navigation"
        className="3xl:gap-x-[10px] 4xl:gap-x-[12px] inline-flex w-full justify-center gap-x-[8px] md:justify-end"
      >
        <PrintButton iconClasses={iconClasses} />
        <IconLink
          icon={<IoMailOutline className={iconClasses} />}
          link={`${email.prefix}${email.text}`}
        />
        <IconLink
          icon={<IoLogoLinkedin className={iconClasses} />}
          link={`${linkedin.prefix}${linkedin.text}`}
        />
        <IconLink
          icon={<IoLogoGithub className={iconClasses} />}
          link={`${github.prefix}${github.text}`}
        />
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </div>
  );
}
