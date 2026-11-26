import { useState } from 'react';
import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectList } from './components/ProjectList';
import { ProjectsHeader } from './components/ProjectsHeader';
import { PROJECTS_HEADING, PROJECTS_LIST } from './data/projects.data';

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id={SECTION_IDS.PROJECTS}>
      <ProjectsHeader heading={PROJECTS_HEADING} />

      <ProjectList
        projects={PROJECTS_LIST}
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
