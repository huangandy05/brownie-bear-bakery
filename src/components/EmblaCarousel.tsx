"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useProgressBar } from "./EmblaProgressBar";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { menu_items } from "@/menu_items";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const progressBarWidth =
    menu_items.length > 0 ? `${100 / menu_items.length}%` : "100%";

  const [isPlaying, setIsPlaying] = useState(false); // eslint-disable-line

  const {
    selectedIndex,
    scrollSnaps, // eslint-disable-line
    onProgressBarClick,
  } = useProgressBar(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  // eslint-disable-next-line
  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <section id="dummy" className="py-12 pb-32 w-full items-center ">
      <div className="container mx-auto flex flex-col text-center justify-center gap-4 w-full">
        <h2 className="text-3xl mb-6">Dummy Carousel</h2>

        {/* Hide carousel if greater than sm */}
        <div className="w-full sm:hidden">
          <div className="embla w-full">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {/* Cards go here */}
                {menu_items.map((item, index) => (
                  <div key={index} className="embla__slide">
                    <Card className="w-full h-full pt-1 px-1 bg-[#ebd9d0] shadow-none border-none">
                      <div className="relative aspect-square mx-3 mt-3">
                        <Image
                          src={item.image}
                          alt={"biscoff"}
                          fill
                          className="object-cover  rounded-lg"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                        <p className="text-lg font-bold">{item.price}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            {/* Controls */}
            <div className="embla__controls flex flex-col gap-6 justify-center mt-6">
              {/* Progress bar */}
              <div className="embla__progress flex justify-center bg-slate-300 mx-8">
                {Array.from(Array(menu_items.length).keys()).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onProgressBarClick(index)}
                    style={{ width: progressBarWidth }}
                    className={"embla__progress__dot h-1 ".concat(
                      selectedIndex === index ? " bg-amber-950" : ""
                    )}
                  />
                ))}
              </div>
              {/* Button */}
              <div className="embla__buttons flex justify-center gap-3">
                <PrevButton
                  onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                  disabled={nextBtnDisabled}
                />
              </div>
              {/* <button
              className="embla__play"
              onClick={toggleAutoplay}
              type="button"
            >
              {isPlaying ? "Stop" : "Start"}
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
