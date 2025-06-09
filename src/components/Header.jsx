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
    <section className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 py-16 text-neutral-50">
      <div className="mx-auto max-w-96/100 px-6 text-center sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <img
          src={image.src}
          alt={image.alt}
          className="m-auto h-32 w-32 rounded-full"
        />
        <h1 className="md:text[48px] mt-8 mb-4 text-3xl font-bold sm:text-[36px] md:text-[48px] xl:text-[64px]">
          {document.title}
        </h1>
        <p className="mb-16 text-lg sm:text-xl md:text-2xl">{legend}</p>
        <div className="grid grid-cols-1 grid-rows-6 justify-items-center gap-4 leading-none md:grid-cols-2 md:grid-rows-3 md:text-lg xl:grid-cols-3 xl:grid-rows-2 xl:text-xl">
          <span className="inline-flex">
            <IoPerson className="mr-1" />
            {Age() + " " + person.text}
          </span>
          <span className="inline-flex">
            <IoLocation className="mr-1" />
            {city}
          </span>
          <span className="inline-flex">
            <IoCall className="mr-1" />
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
