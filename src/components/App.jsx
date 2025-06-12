import NavBar from "./NavBar";
import Header from "./Header";
import Carousel from "./Carousel";
import Graduations from "./Graduations";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Highlights from "./Highlights";
import Footer from "./Footer";
import { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { IoSync } from "react-icons/io5";

export default function App() {
  const { collections } = useContext(AppContext);

  if (!collections) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        <IoSync className="mb-4 h-16 w-16 animate-spin text-teal-700" />
        <span className="text-neutral-900 dark:text-neutral-100">
          Loading...
        </span>
      </div>
    );
  }

  const { header, schools, works, skills, titles, highlights, footer } =
    collections;

  return (
    <div
      id="page"
      className="min-h-[100svh] w-full bg-neutral-100 font-sans leading-none text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-neutral-100"
    >
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-neutral-200 py-4 dark:bg-neutral-800">
        <div className="mx-auto max-w-96/100 px-6 leading-none sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <NavBar
            email={header.email}
            linkedin={header.linkedin}
            github={header.github}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Header content={header} />
        <div
          id="sections"
          className="mx-auto mt-16 max-w-96/100 px-4 sm:max-w-9/10 md:max-w-86/100 md:px-6 2xl:max-w-4/5"
        >
          <Carousel />
          <Graduations title={schools.title} content={schools.content} />
          <Experiences title={works.title} content={works.content} />
          <Skills title={skills.title} content={skills.content} />
          <Certificates title={titles.title} content={titles.content} />
          <Highlights title={highlights.title} content={highlights.content} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-200 py-8 text-center text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
        <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <Footer complement={footer.complement} closing={footer.closing} />
        </div>
      </footer>
    </div>
  );
}
