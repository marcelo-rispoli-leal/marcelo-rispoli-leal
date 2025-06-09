import {
  IoLocationOutline,
  IoHourglassOutline,
  IoCallOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

export default function Header({
  legend,
  city,
  age,
  phone,
  email,
  linkedin,
  github,
}) {
  const Age = () => {
    const ageTime = Date.now() - new Date(age.birth).getTime();
    const ageDate = new Date(ageTime);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <section className="overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 py-16 text-neutral-50">
      <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <div className="text-center">
          <img
            src="./images/marcelo.webp"
            alt="MRL"
            className="m-auto h-32 w-32 rounded-full"
          />
          <h1 className="mt-8 mb-4 text-5xl font-bold md:text-6xl">
            {document.title}
          </h1>
          <p className="mb-12 text-xl font-light md:text-2xl">{legend}</p>
          <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-4 text-xl leading-none">
            <span className="inline-flex">
              <IoLocationOutline className="mr-2" />
              {city.text}
            </span>
            <span className="inline-flex">
              <IoHourglassOutline className="mr-2" />
              {Age() + " " + age.text}
            </span>
            <span className="inline-flex">
              <IoCallOutline className="mr-2" />
              {phone.text}
            </span>
            <a className="inline-flex" href={email.prefix + email.text}>
              <IoMailOutline className="mr-2" />
              {email.text}
            </a>
            <a className="inline-flex" href={linkedin.prefix + linkedin.text}>
              <IoLogoLinkedin className="mr-2" />
              {linkedin.text}
            </a>
            <a className="inline-flex" href={github.prefix + github.text}>
              <IoLogoGithub className="mr-2" />
              {github.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
