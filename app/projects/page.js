import client from '../lib/contentful'; 
import ProjectStackDisplay from '../component/ProjectStackDisplay';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'; 

export default async function Projects() { 
  const res = await client.getEntries({
    content_type: 'project', 
  });

  const projects = res.items;

  if (!projects || projects.length === 0) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary-orange">No Projects Found</h1>
        <p className="mt-4 text-lg">It looks like there are no published projects in Contentful yet.</p>
      </main>
    );
  }

  const stackItems = projects.map(project => ({
    id: project.sys.id, 
    title: project.fields.titel, 
    description: project.fields.ShortDescription ? documentToPlainTextString(project.fields.ShortDescription) : 'No description available.', 
    image: project.fields.image && project.fields.image.fields.file ? project.fields.image.fields.file.url : null, 
    link: `/projects/${project.fields.slug}`, 
  }));

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-center mb-8">My Projects</h1>
      <p className="text-center text-xl mb-8 text-gray-700">
        This is my code space, where I showcase a selection of my projects.
      </p>
      <div className="max-w-3xl mx-auto">
        <ProjectStackDisplay stackItems={stackItems} />
      </div>
    </main>
  );
}