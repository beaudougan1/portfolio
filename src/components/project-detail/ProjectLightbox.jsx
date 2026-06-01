import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function ProjectLightbox({
  images,
  selectedImageIndex,
  selectedImage,
  isZoomed,
  setIsZoomed,
  closeImage,
  showPreviousImage,
  showNextImage,
}) {
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

  if (!selectedImageSrc) return null;

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

      <div className="h-screen overflow-auto px-6 pb-28 pt-20">
        <div
          className={
            isZoomed
              ? "flex min-h-max min-w-max justify-center"
              : "flex min-h-full items-center justify-center"
          }
        >
          <img
            src={selectedImageSrc}
            alt={selectedImageCaption || "Full size project preview"}
            onClick={(event) => {
              event.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
            className={
              isZoomed
                ? "max-h-none max-w-none cursor-zoom-out rounded-xl object-contain transition"
                : "max-h-[78vh] max-w-[95vw] cursor-zoom-in rounded-xl object-contain transition"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectLightbox;