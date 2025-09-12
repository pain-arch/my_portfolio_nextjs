'use client';
import { useState, useMemo } from 'react';
import { allProjects } from '@/data/projects';
import { SearchFilter } from '@/components/SearchFilter';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';

export const AllProjectsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        project.features.some(feature =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory = selectedCategory === 'All' || 
        project.category === selectedCategory;

      // Year filter
      const matchesYear = selectedYear === 'All' || 
        project.year === selectedYear;

      // Technology filter
      const matchesTech = selectedTechs.length === 0 || 
        selectedTechs.every(tech => 
          project.technologies.includes(tech)
        );

      return matchesSearch && matchesCategory && matchesYear && matchesTech;
    });
  }, [searchQuery, selectedCategory, selectedYear, selectedTechs]);

  // Sort projects by year (newest first)
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => 
      parseInt(b.year) - parseInt(a.year)
    );
  }, [filteredProjects]);

  return (
    <section className="py-16 lg:py-24 min-h-screen">
      <div className="container">
        {/* Header */}
        <SectionHeader
          eyebrow="Complete Portfolio"
          title="All Projects"
          description="Explore my complete collection of projects with advanced search and filtering. From web applications to landing pages, discover the technologies and solutions I've built."
        />

        {/* Search and Filters */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          selectedTechs={selectedTechs}
          onTechChange={setSelectedTechs}
          projectCount={filteredProjects.length}
        />

        {/* Projects Grid */}
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          // No Results State
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No projects found
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedYear('All');
                setSelectedTechs([]);
              }}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all duration-300 font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 font-semibold border border-white/20"
          >
            <span>←</span>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};