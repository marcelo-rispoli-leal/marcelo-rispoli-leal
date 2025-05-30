export default function Header({ legend }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 py-16 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-96/100 px-6 sm:max-w-9/10 md:max-w-86/100 2xl:max-w-4/5">
        <div className="text-center">
          <img
            src="./marcelo.png"
            alt="MRL"
            className="m-auto flex h-32 w-32 rounded-full bg-white/20 text-4xl font-bold backdrop-blur-sm"
          />
          <h1 className="mt-8 mb-4 text-5xl font-bold md:text-6xl">
            {document.title}
          </h1>
          <p className="text-xl font-light opacity-90 md:text-2xl">{legend}</p>
        </div>
      </div>
    </section>
  );
}
