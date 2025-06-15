import { useState, useEffect } from "react";
import { useAppContext } from "./useAppContext";
import slidesData from "../locales/carousel.json";

export function useCarousel() {
  const { language, isDarkTheme } = useAppContext();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = Object.entries(slidesData).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const totalSlides = slides.length;

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };  

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(nextSlide, 5000);
    }
    return () => clearTimeout(timer);
  }, [currentSlideIndex, totalSlides, isPlaying]);

  const currentSlide = slides[currentSlideIndex];

  let title = currentSlide?.[language] || currentSlide?.en;
  if (
    currentSlide &&
    ["languages", "tools", "resources", "databases", "systems", "companies"].includes(
      currentSlide.id,
    )
  ) {
    title = currentSlide[language] || currentSlide.en;
  }

  return {
    title,
    slides,
    prevSlide,
    nextSlide,
    currentSlide,
    currentSlideIndex,
    setCurrentSlideIndex,
    isPlaying,
    setIsPlaying,
    isDarkTheme,
  };
}
