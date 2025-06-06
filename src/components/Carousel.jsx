import { useState, useEffect } from "react";
import {
  IoIdCardOutline,
  IoCodeSlash,
  IoCloudOutline,
  IoConstructOutline,
  IoServerOutline,
  IoDesktopOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoPause,
  IoPlay,
} from "react-icons/io5";
import { useAppContext } from "../hooks/useAppContext";
import slidesData from "../slides/large.json";

// Mapeamento de nomes de ícones para componentes
const iconMap = {
  IoIdCardOutline,
  IoCodeSlash,
  IoCloudOutline,
  IoConstructOutline,
  IoServerOutline,
  IoDesktopOutline,
};

export default function Carousel() {
  const { language, isDarkTheme } = useAppContext();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Converte o objeto sliderData em um array de slides
  const slides = Object.entries(slidesData).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides,
    );
  };

  // Mudança automática de slide
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(nextSlide, 7000); // Muda o slide a cada 7 segundos
    }
    return () => clearTimeout(timer);
  }, [currentSlideIndex, totalSlides, isPlaying]);

  if (!slides || slides.length === 0) {
    return <div>Loading slides...</div>;
  }

  const currentSlide = slides[currentSlideIndex];
  const IconComponent = iconMap[currentSlide.icon];

  let title = currentSlide[language] || currentSlide.en;
  if (
    ["languages", "tools", "aws", "databases", "systems", "companies"].includes(
      currentSlide.id,
    )
  ) {
    title = currentSlide[language] || currentSlide.en;
  }

  return (
    <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-8 dark:from-teal-900/20 dark:to-emerald-900/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex h-10 items-center justify-center text-center">
          {IconComponent && (
            <IconComponent className="mr-4 h-9 w-9 pt-1 text-teal-600" />
          )}
          <h2 className="text-4xl leading-none font-bold text-teal-600 underline">
            {title}
          </h2>
        </div>

        <div className="relative">
          {/* Container with fixed aspect ratio */}
          <div className="relative w-full pb-[56.25%]">
            {/* Grid for images */}
            <div
              className={`absolute inset-0 grid gap-4 sm:gap-6 md:gap-8`}
              style={{
                gridTemplateColumns: `repeat(${currentSlide.columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${currentSlide.rows}, minmax(0, 1fr))`,
              }}
            >
              {currentSlide.content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2 md:p-4"
                >
                  <img
                    src={isDarkTheme && item.dark ? item.dark : item.src}
                    alt={item.alt || item.label}
                    className="h-full w-full object-contain"
                  />
                  {item.label && (
                    <p className="mt-[-38px] text-center text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                      {item.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navegation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 transform rounded-full bg-neutral-800/50 p-2 text-white hover:bg-neutral-800/80 focus:outline-none md:-left-12 dark:bg-neutral-200/50 dark:hover:bg-neutral-200/80"
            aria-label="Previous slide"
          >
            <IoChevronBackOutline className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 transform rounded-full bg-neutral-800/50 p-2 text-white hover:bg-neutral-800/80 focus:outline-none md:-right-12 dark:bg-neutral-200/50 dark:hover:bg-neutral-200/80"
            aria-label="Next slide"
          >
            <IoChevronForwardOutline className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>

        {/* slide Indicators (dots) */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlideIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentSlideIndex
                    ? "bg-teal-600"
                    : "bg-neutral-300 dark:bg-neutral-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full bg-neutral-800/50 p-2 text-white hover:bg-neutral-800/80 focus:outline-none dark:bg-neutral-200/50 dark:hover:bg-neutral-200/80"
            aria-label={isPlaying ? "Pause slide show" : "Play slide show"}
          >
            {isPlaying ? (
              <IoPause className="h-6 w-6 md:h-8 md:w-8" />
            ) : (
              <IoPlay className="h-6 w-6 md:h-8 md:w-8" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
