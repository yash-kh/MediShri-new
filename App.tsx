import React, { useEffect, useRef } from "react";

const images = [
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0001.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0002.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0003.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0004.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0005.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0006.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0007.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0008.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0009.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0010.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0011.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0012.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0013.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0014.jpg",
  "static/Product Card (NEW) EDITING (07-10-2025) (2) (1)_pages-to-jpg-0016.jpg",
];

const AUTO_SCROLL_DELAY = 3000;
const RESUME_DELAY = 4000;

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = window.setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const children = container.children;
      indexRef.current = (indexRef.current + 1) % children.length;

      (children[indexRef.current] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }, AUTO_SCROLL_DELAY);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleUserScroll = () => {
    stopAutoScroll();

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      indexRef.current = Math.round(container.scrollLeft / width);
      startAutoScroll();
    }, RESUME_DELAY);
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  return (
    <>
      {/* Desktop PDF */}
      <div className="hidden md:block">
        <iframe
          src="static/catalogue.pdf#view=FitH"
          className="pdf-frame"
        ></iframe>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden">
        <div
          ref={containerRef}
          onScroll={handleUserScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full snap-center rounded-xl flex-shrink-0"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
