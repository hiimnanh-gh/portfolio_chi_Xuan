import { useMemo, useState } from 'react';
import { ALL_PROJECTS_CATEGORY } from '../data/projectCategories.data';

/**
 * Manages category filtering state for the Projects section.
 * @param {Array} projects - Full list of project objects.
 * @returns {{ selectedCategory: string, setSelectedCategory: (cat: string) => void, filteredProjects: Array }}
 */
export function useProjectFilter(projects = []) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_PROJECTS_CATEGORY);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === ALL_PROJECTS_CATEGORY) {
      return projects;
    }

    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  };
}
