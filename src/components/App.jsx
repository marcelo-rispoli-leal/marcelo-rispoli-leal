import NavBar from "./NavBar";
import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import Carousel from "./Carousel";
import Education from "./Education";

export default function App() {
  return (
    <div className="min-h-[100svh] w-full bg-neutral-100 font-sans text-neutral-900 transition-colors dark:bg-neutral-900 dark:text-neutral-100">
      {/* Header fixo */}
      <header className="fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-sm dark:bg-neutral-800/90">
        <div className="mx-auto max-w-9/10 px-6 py-4 leading-none sm:max-w-85/100 md:max-w-8/10 lg:max-w-3/4 xl:max-w-7/10 2xl:max-w-2/3">
          <NavBar />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="pt-20">
        <Header />
        <Carousel />
        <Experience />
        <Skills />
        <Education />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 py-8 text-center text-neutral-300 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm">
            © 2025 Marcelo Rispoli Leal. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs opacity-75">
            Desenvolvido com React, Tailwind CSS e muito ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
