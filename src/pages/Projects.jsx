// /pages/ProjectsPage.jsx
import React, { useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import ProjectCard from "@components/ui/ProjectCard";

// ---- Sample data (replace with your real data/images) ----
const PROJECTS = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    category: "Portraits",
    tags: ["Outdoor", "Natural Light"],
    date: "2025-06-12",
    cover: "https://picsum.photos/200/300/?random=3",
  },
  {
    id: 2,
    title: "White Wedding – Chika & Ugo",
    category: "Weddings",
    tags: ["White Wedding", "Lagos"],
    date: "2025-05-20",
    cover: "https://picsum.photos/200/300/?random=2",
  },
  {
    id: 3,
    title: "Traditional Ceremony – Ada & Kene",
    category: "Weddings",
    tags: ["Traditional", "Ankara"],
    date: "2025-04-28",
    cover: "https://picsum.photos/200/300/?random=1",
  },
  {
    id: 4,
    title: "Product Elegance",
    category: "Commercial",
    tags: ["Studio", "Product"],
    date: "2024-11-10",
    cover: "https://picsum.photos/200/300/?random=4",
  },
  {
    id: 5,
    title: "Birthday Brunch",
    category: "Events",
    tags: ["Indoor", "Candid"],
    date: "2025-02-14",
    cover: "https://picsum.photos/200/300/?random=7",
  },
];

const CATEGORIES = ["All", "Portraits", "Weddings", "Events", "Commercial"];
const ALL_TAGS = [
  "Outdoor",
  "Natural Light",
  "White Wedding",
  "Traditional",
  "Ankara",
  "Studio",
  "Product",
  "Indoor",
  "Candid",
  "Lagos",
];

const sortFns = {
  "Newest first": (a, b) => new Date(b.date) - new Date(a.date),
  "Oldest first": (a, b) => new Date(a.date) - new Date(b.date),
  "Title A–Z": (a, b) => a.title.localeCompare(b.title),
};

const ProjectsPage = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Newest first");

  const filtered = useMemo(() => {
    let list = [...PROJECTS];

    // category
    if (category !== "All") {
      list = list.filter(p => p.category === category);
    }

    // tags (all selected must be present)
    if (selectedTags.length) {
      list = list.filter(p =>
        selectedTags.every(t => p.tags.includes(t))
      );
    }

    // search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.join(" ").toLowerCase().includes(q)
      );
    }

    // sort
    list.sort(sortFns[sortBy]);
    return list;
  }, [category, selectedTags, query, sortBy]);

  const toggleTag = tag => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setCategory("All");
    setSelectedTags([]);
    setQuery("");
    setSortBy("Newest first");
  };

  return (
    <section className="container section-heading relative pt-32">
      {/* Top Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">Projects</h1>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search projects, tags, locations…"
              className="pl-10 pr-3 py-2 rounded-xl border border-dark-midLight bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-3 py-2 rounded-xl border border-dark-midLight bg-transparent"
          >
            {Object.keys(sortFns).map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {/* Clear */}
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-dark-midLight hover:bg-white/5 transition"
            title="Clear all filters"
          >
            <FiX /> Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-8">
        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Category */}
          <div>
            <h3 className=" font-semibold mb-3 uppercase">Category</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-full border transition ${
                      active
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-dark-midLight hover:bg-purple-500/10 "
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="uppercase font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map(tag => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full border text-sm transition ${
                      active
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-dark-midLight hover:bg-purple-500/10"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <p className="opacity-80">No projects match your filters.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
