'use client';
import { useState } from 'react';
import { projectCategories, projectYears, allTechnologies } from '@/data/projects';

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
  selectedTechs: string[];
  onTechChange: (techs: string[]) => void;
  projectCount: number;
}

export const SearchFilter = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedYear,
  onYearChange,
  selectedTechs,
  onTechChange,
  projectCount
}: SearchFilterProps) => {
  const [showAllTechs, setShowAllTechs] = useState(false);

  const handleTechToggle = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      onTechChange(selectedTechs.filter(t => t !== tech));
    } else {
      onTechChange([...selectedTechs, tech]);
    }
  };

  const clearAllFilters = () => {
    onSearchChange('');
    onCategoryChange('All');
    onYearChange('All');
    onTechChange([]);
  };

  const displayedTechs = showAllTechs ? allTechnologies : allTechnologies.slice(0, 8);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 mt-8">
      {/* Search Bar */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-white/70 mb-2">
          Search Projects
        </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, description, or technology..."
          className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/20 transition-all duration-300"
        />
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-white/70 mb-2">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/20 transition-all duration-300"
          >
            {projectCategories.map(category => (
              <option key={category} value={category} className="bg-gray-900">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-white/70 mb-2">
            Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/20 transition-all duration-300"
          >
            {projectYears.map(year => (
              <option key={year} value={year} className="bg-gray-900">
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count & Clear Filters */}
        <div className="flex flex-col justify-end">
          <div className="text-sm text-white/70 mb-2">
            {projectCount} project{projectCount !== 1 ? 's' : ''} found
          </div>
          <button
            onClick={clearAllFilters}
            className="px-4 py-3 bg-emerald-600/20 border border-emerald-300/30 text-emerald-300 rounded-xl hover:bg-emerald-600/30 transition-all duration-300 text-sm font-medium"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Technology Filter */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-3">
          Technologies ({selectedTechs.length} selected)
        </label>
        <div className="flex flex-wrap gap-2">
          {displayedTechs.map(tech => (
            <button
              key={tech}
              onClick={() => handleTechToggle(tech)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTechs.includes(tech)
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : 'bg-gray-700/50 text-white/70 hover:bg-gray-600/50 hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
          {allTechnologies.length > 8 && (
            <button
              onClick={() => setShowAllTechs(!showAllTechs)}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-600/50 text-white/70 hover:bg-gray-500/50 hover:text-white transition-all duration-300 border border-white/20"
            >
              {showAllTechs ? 'Show Less' : `+${allTechnologies.length - 8} More`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};