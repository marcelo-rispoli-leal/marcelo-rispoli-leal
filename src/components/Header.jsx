import {
  IoPerson,
  IoLocation,
  IoCall,
  IoMail,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

export default function Header({ content }) {
  const { image, legend, person, city, phone, email, linkedin, github } =
    content;

  const Age = () => {
    const ageTime = Date.now() - new Date(person.birth).getTime();
    const ageDate = new Date(ageTime);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <section
      id="head"
      className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 pt-[64px] pb-[64px] text-neutral-50"
    >
      <div
        id="header"
        className="mx-auto max-w-96/100 px-[12px] text-center sm:max-w-9/10 md:max-w-86/100 md:px-[16px] xl:px-[24px] 2xl:max-w-4/5"
      >
        <img
          id="photo"
          src={image.src}
          alt={image.alt}
          className="m-auto h-[128px] w-[128px] rounded-full"
        />
        <h1 className="mt-[32px] mb-[16px] text-[32px] font-bold md:text-[48px] xl:text-[64px]">
          {document.title}
        </h1>
        <p
          id="legend"
          className="mb-[48px] text-[18px] sm:text-[20px] md:text-[24px]"
        >
          {legend}
        </p>
        <p id="site" className="mb-[32px] hidden text-[20px]">
          {document.URL}
        </p>
        <div
          id="contact"
          className="grid grid-cols-1 grid-rows-6 justify-items-center gap-[6px] sm:grid-cols-2 sm:grid-rows-3 sm:gap-[8px] md:text-[18px] xl:grid-cols-3 xl:grid-rows-2 xl:text-[20px]"
        >
          <span className="inline-flex">
            <IoPerson className="mr-1" />
            {Age() + " " + person.text}
          </span>
          <span className="inline-flex">
            <IoLocation className="mr-1" />
            {city}
          </span>
          <span className="inline-flex">
            <IoCall className="mr-1 rotate-18" />
            {phone}
          </span>
          <a className="inline-flex" href={email.prefix + email.text}>
            <IoMail className="mr-1" />
            {email.text}
          </a>
          <a className="inline-flex" href={linkedin.prefix + linkedin.text}>
            <IoLogoLinkedin className="mr-1" />
            {linkedin.text}
          </a>
          <a className="inline-flex" href={github.prefix + github.text}>
            <IoLogoGithub className="mr-1" />
            {github.text}
          </a>
        </div>
      </div>
    </section>
  );
}
