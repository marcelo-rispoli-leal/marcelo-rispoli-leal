import NavBar from "./NavBar";
import Header from "./Header";
import Carousel from "./Carousel";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Highlights from "./Highlights";
import { IoCafe } from "react-icons/io5";

export default function App() {
  return (
    <div className="min-h-[100svh] w-full bg-neutral-100 font-sans text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-neutral-200 py-4 shadow-sm backdrop-blur-sm dark:bg-neutral-800">
        <div className="mx-auto max-w-96/100 px-6 leading-none sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <NavBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Header />
        <Carousel />
        <Education />
        <Experience />
        <Skills />
        <Certificates />
        <Highlights />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-200 py-8 text-center text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
        <div className="mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
          <p className="text-sm">
            © 2025 Marcelo Rispoli Leal. Todos os direitos reservados.
          </p>
          <p className="mt-2 inline-flex items-end text-xs opacity-75">
            Desenvolvido com React, Tailwind CSS e muito
            <IoCafe className="ml-0.75 text-sm" />
          </p>
        </div>
      </footer>
    </div>
  );
}
