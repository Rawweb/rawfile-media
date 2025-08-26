import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <article className="group border border-dark-midLight rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="text-xs uppercase opacity-70">{project.category}</div>
        <h3 className="font-semibold">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full border border-dark-midLight text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-xs opacity-60">
          {new Date(project.date).toLocaleDateString()}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
