// pages/ProjectDetail.jsx
import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '@data/projectsData'; // adjust path
import { FiX } from 'react-icons/fi';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = useMemo(() => PROJECTS.find(p => p.slug === slug), [slug]);

  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = project?.images || [];

  if (!project) {
    return (
      <section className="container pt-32">
        <p className="opacity-80">Project not found.</p>
        <Link to="/projects" className="highlight-btn mt-4 inline-flex">
          Back to projects
        </Link>
      </section>
    );
  }

  const openLightbox = idx => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(-1);
  const prev = () => setLightboxIndex(i => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setLightboxIndex(i => (i < images.length - 1 ? i + 1 : 0));

  return (
    <section className="container section-heading pt-28">
      {/* Header */}
      <div className="mb-6">
        <Link to="/projects" className="text-sm opacity-70 hover:opacity-100">
          ← Back to Projects
        </Link>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold">{project.title}</h1>
        <div className="mt-2 text-sm opacity-80">
          <span>{new Date(project.date).toLocaleDateString()}</span>
          {project.location ? <span> • {project.location}</span> : null}
          <span> • {project.category}</span>
        </div>
        {project.description ? (
          <p className="mt-3 max-w-2xl opacity-90">{project.description}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full border border-dark-midLight text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => openLightbox(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-dark-midLight"
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <img
              src={src}
              alt={`${project.title} – ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition"
              loading="lazy"
              onError={e => {
                e.currentTarget.src = project.cover;
              }}
            />
          </button>
        ))}
      </div>

      {/* Simple Lightbox */}
      {lightboxIndex >= 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox} // click background closes
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            onClick={e => {
              e.stopPropagation(); // prevent triggering background
              closeLightbox();
            }}
            aria-label="Close"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex]}
            alt={`${project.title} – ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[95vw] object-contain"
            onClick={e => e.stopPropagation()} // clicking image doesn’t close
          />

          {/* Prev button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            onClick={e => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            onClick={e => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
