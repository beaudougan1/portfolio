import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function ProjectLightbox({
  images,
  selectedImageIndex,
  selectedImage,
  closeImage,
  showPreviousImage,
  showNextImage,
}) {
  const [zoomLevel, setZoomLevel] = useState(0);
  const scrollContainerRef = useRef(null);

  const selectedImageSrc = selectedImage?.src || null;
  const selectedImageCaption = selectedImage?.caption || "";

  useEffect(() => {
    if (!selectedImageSrc) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageSrc, closeImage, showPreviousImage, showNextImage]);

  useEffect(() => {
    setZoomLevel(0);

    const container = scrollContainerRef.current;

    if (!container || !selectedImageSrc) return;

    container.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [selectedImageSrc]);

  const handleImageClick = (event) => {
    event.stopPropagation();

    const container = scrollContainerRef.current;
    const image = event.currentTarget;
    const rect = image.getBoundingClientRect();

    const clickRatioX = (event.clientX - rect.left) / rect.width;
    const clickRatioY = (event.clientY - rect.top) / rect.height;

    const nextZoomLevel = zoomLevel === 2 ? 0 : zoomLevel + 1;

    setZoomLevel(nextZoomLevel);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!container || nextZoomLevel === 0) {
          container?.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
          return;
        }

        const scrollWidth = container.scrollWidth - container.clientWidth;
        const scrollHeight = container.scrollHeight - container.clientHeight;

        container.scrollTo({
          left: scrollWidth * clickRatioX,
          top: scrollHeight * clickRatioY,
          behavior: "instant",
        });
      });
    });
  };

  if (!selectedImageSrc) return null;

  const imageClassName =
    zoomLevel === 0
      ? "max-h-[78vh] max-w-[95vw] cursor-zoom-in rounded-xl object-contain transition"
      : zoomLevel === 1
        ? "h-auto max-h-none w-[140vw] max-w-none cursor-zoom-in rounded-xl object-contain transition"
        : "h-auto max-h-none w-[220vw] max-w-none cursor-zoom-out rounded-xl object-contain transition";

  return (
    <div className="fixed inset-0 z-[100] bg-black/90" onClick={closeImage}>
      <button
        type="button"
        onClick={closeImage}
        className="fixed right-5 top-5 z-[110] rounded-full border border-slate-700 bg-slate-900 p-3 text-white transition hover:border-blue-400"
        aria-label="Close image preview"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <div
          className="fixed left-1/2 top-5 z-[110] -translate-x-1/2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
          onClick={(event) => event.stopPropagation()}
        >
          {selectedImageIndex + 1} / {images.length}
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setZoomLevel(0);
              showPreviousImage();
            }}
            className="fixed left-5 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900 p-3 text-white transition hover:border-blue-400"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setZoomLevel(0);
              showNextImage();
            }}
            className="fixed right-5 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900 p-3 text-white transition hover:border-blue-400"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {selectedImageCaption && (
        <div
          className="fixed bottom-4 left-1/2 z-[110] w-[90%] max-w-4xl -translate-x-1/2 rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 text-center text-sm leading-6 text-slate-300 backdrop-blur"
          onClick={(event) => event.stopPropagation()}
        >
          {selectedImageCaption}
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className="h-screen overflow-auto px-6 pb-28 pt-20"
      >
        <div
          className={
            zoomLevel === 0
              ? "flex min-h-full items-center justify-center"
              : "flex min-h-max min-w-max justify-center"
          }
        >
          <img
            src={selectedImageSrc}
            alt={selectedImageCaption || "Full size project preview"}
            onClick={handleImageClick}
            draggable={false}
            className={imageClassName}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectLightbox;