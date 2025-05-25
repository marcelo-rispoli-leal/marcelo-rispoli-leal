export default function Header() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 py-16 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-9/10 px-6 sm:max-w-85/100 md:max-w-8/10 lg:max-w-3/4 xl:max-w-7/10 2xl:max-w-2/3">
        <div className="text-center">
          <img
            src="./marcelo.png"
            alt="MRL"
            className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-white/20 text-4xl font-bold backdrop-blur-sm"
          />
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            Marcelo Rispoli Leal
          </h1>
          <p className="text-xl font-light opacity-90 md:text-2xl">
            Especialista em Sistemas Fiscais & Integração de Dados Corporativos
          </p>
        </div>
      </div>
    </section>
  );
}
