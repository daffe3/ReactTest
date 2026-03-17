import client from '../lib/contentful';
import ProjectsContent from '../component/ProjectsContent';

export const metadata = {
  title: 'Projects',
  description: 'En samling av Davids frontend-projekt byggda med React, TypeScript, Remix och mer.',
};

export default async function Projects() {
  const res = await client.getEntries({
    content_type: 'project',
    order: 'sys.createdAt',
  });

  const projects = res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.titel,
    description: item.fields.shortDescription || '',
    image: item.fields.image?.fields?.file?.url || null,
    link: `/projects/${item.fields.slug}`,
    technologies: item.fields.technologiesUsed || [],
  }));

  return <ProjectsContent projects={projects} />;
}
