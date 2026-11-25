import { useState } from 'react';
import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectList } from './components/ProjectList';
import { ProjectsHeader } from './components/ProjectsHeader';
import { PROJECT_CATEGORIES } from './data/projectCategories.data';
import { PROJECTS_HEADING, PROJECTS_LIST } from './data/projects.data';
import { useProjectFilter } from './hooks/useProjectFilter';

export function ProjectsPage() {
  const { selectedCategory, setSelectedCategory, filteredProjects } =
    useProjectFilter(PROJECTS_LIST);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id={SECTION_IDS.PROJECTS}>
      <ProjectsHeader
        heading={PROJECTS_HEADING}
        categories={PROJECT_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProjectList
        projects={filteredProjects}
        emptyMessage={PROJECTS_HEADING.emptyMessage}
        onOpenDetail={setSelectedProject}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}
