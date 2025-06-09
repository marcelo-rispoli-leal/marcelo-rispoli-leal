import { useCarousel } from "../hooks/useCarousel";
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

const iconMap = {
  IoIdCardOutline,
  IoCodeSlash,
  IoCloudOutline,
  IoConstructOutline,
  IoServerOutline,
  IoDesktopOutline,
};

export default function Carousel() {
  const {
    slides,
    currentSlide,
    currentSlideIndex,
    setCurrentSlideIndex,
    isPlaying,
    setIsPlaying,
    nextSlide,
    prevSlide,
    title,
    isDarkTheme,
  } = useCarousel();

  if (!slides || slides.length === 0) {
    return <div>Loading slides...</div>;
  }

  const IconComponent = iconMap[currentSlide.icon];

  return (
    <section className="rounded-3xl bg-teal-100/80 py-8 dark:bg-teal-900/20">
      <div className="px-6">
        <h2 className="mb-12 text-2xl text-teal-700 underline md:text-3xl xl:text-4xl dark:text-teal-300">
          <IconComponent className="mr-1" />
          {title}
        </h2>

        <div className="relative">
          {/* Container with fixed aspect ratio */}
          <div className="w-full pb-[30%]">
            {/* Grid for images */}
            <div
              className={`absolute inset-0 grid gap-8 px-4`}
              style={{
                gridTemplateColumns: `repeat(${currentSlide.columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${currentSlide.rows}, minmax(0, 1fr))`,
              }}
            >
              {currentSlide.content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={isDarkTheme && item.dark ? item.dark : item.src}
                    alt={item.alt || item.label}
                    className="h-full w-full object-contain"
                  />
                  {item.label && (
                    <p className="mt-[-24px] text-center font-semibold text-neutral-50">
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
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-neutral-500 p-2 text-neutral-50 hover:bg-neutral-600 md:-left-12 dark:hover:bg-neutral-400"
            aria-label="Previous slide"
          >
            <IoChevronBackOutline className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-neutral-500 p-2 text-neutral-50 hover:bg-neutral-600 md:-right-12 dark:hover:bg-neutral-400"
            aria-label="Next slide"
          >
            <IoChevronForwardOutline className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>

        {/* Slides indicators (dots) */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlideIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentSlideIndex
                    ? "bg-teal-700 dark:bg-teal-300"
                    : "bg-neutral-500 hover:bg-neutral-600 dark:hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full bg-neutral-500 p-2 text-neutral-50 hover:bg-neutral-600 dark:hover:bg-neutral-400"
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
