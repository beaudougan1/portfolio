import { useCallback, useMemo, useState } from "react";
import ProjectLightbox from "./ProjectLightbox";

function ProjectMedia({ project }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const hasMainImage = Boolean(project.image);
  const hasGallery = project.gallery && project.gallery.length > 0;
  const hasYouTube = Boolean(project.youtubeEmbed);

  const normalizedGallery = useMemo(
    () =>
      (project.gallery || []).map((item) =>
        typeof item === "string"
          ? {
              src: item,
              caption: "",
            }
          : item
      ),
    [project.gallery]
  );

  const lightboxImages = useMemo(
    () =>
      [
        project.image
          ? {
              src: project.image,
              caption: project.imageCaption || "Project hero image",
            }
          : null,

        project.architectureDiagram
          ? {
              src: project.architectureDiagram,
              caption:
                project.architectureCaption || "System architecture diagram",
            }
          : null,

        ...normalizedGallery,
      ].filter(Boolean),
    [
      project.image,
      project.imageCaption,
      project.architectureDiagram,
      project.architectureCaption,
      normalizedGallery,
    ]
  );

  const selectedImage =
    selectedImageIndex !== null ? lightboxImages[selectedImageIndex] : null;

  const openImage = (imageOrObject) => {
    const imageSrc =
      typeof imageOrObject === "string" ? imageOrObject : imageOrObject.src;

    const index = lightboxImages.findIndex((image) => image.src === imageSrc);

    setSelectedImageIndex(index);
  };

  const closeImage = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0 ? lightboxImages.length - 1 : currentIndex - 1
    );
  }, [lightboxImages.length]);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === lightboxImages.length - 1 ? 0 : currentIndex + 1
    );
  }, [lightboxImages.length]);

  if (!hasMainImage && !hasGallery && !hasYouTube && !project.architectureDiagram) {
    return (
      <section className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="flex aspect-video items-center justify-center bg-slate-800 text-slate-500">
          Project media coming soon
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 space-y-10">
      {hasYouTube && (
        <div>
          <h2 className="mb-6 text-3xl font-bold">Demo Video</h2>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="aspect-video">
              <iframe
                src={project.youtubeEmbed}
                title={`${project.title} demo video`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {hasMainImage && (
        <div>
          {project.heroLayout === "portrait" ? (
            <button
              type="button"
              onClick={() => openImage(project.image)}
              className="mx-auto block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="max-h-[760px] max-w-full object-contain transition duration-300 hover:scale-[1.02]"
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => openImage(project.image)}
              className="block w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left"
            >
              <div className="aspect-video bg-slate-800">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            </button>
          )}
        </div>
      )}

      {project.architectureDiagram && (
        <div>
          <h2 className="mb-6 text-3xl font-bold">Architecture Diagram</h2>

          <button
            type="button"
            onClick={() => openImage(project.architectureDiagram)}
            className="mx-auto block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >
            <img
              src={project.architectureDiagram}
              alt={`${project.title} architecture diagram`}
              className="max-h-[450px] w-auto object-contain transition duration-300 hover:scale-[1.01]"
            />
          </button>

          <p className="mt-3 text-center text-sm text-slate-400">
            Click to view larger. Click again inside the viewer to zoom.
          </p>
        </div>
      )}

      {hasGallery && (
        <div>
          <h2 className="mb-6 text-3xl font-bold">Gallery</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {normalizedGallery.map((image, index) => (
              <button
                type="button"
                key={image.src}
                onClick={() => openImage(image)}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-left"
              >
                <img
                  src={image.src}
                  alt={
                    image.caption ||
                    `${project.title} gallery image ${index + 1}`
                  }
                  className="aspect-video h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <ProjectLightbox
        images={lightboxImages}
        selectedImageIndex={selectedImageIndex}
        selectedImage={selectedImage}
        closeImage={closeImage}
        showPreviousImage={showPreviousImage}
        showNextImage={showNextImage}
      />
    </section>
  );
}

export default ProjectMedia;