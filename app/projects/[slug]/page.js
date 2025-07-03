   import client from '../../lib/contentful'; 
    import ProjectDetail from '../../component/ProjectDetail';
    import { notFound } from 'next/navigation';

    export async function generateStaticParams() {
      const res = await client.getEntries({
        content_type: 'project',
      });

      if (!res.items || res.items.length === 0) {
        return [];
      }

      const paths = res.items.map((project) => ({
        slug: project.fields.slug,
      }));
      return paths;
    }

    export default async function ProjectPage({ params }) {
      const { slug } = await params;

      const res = await client.getEntries({
        content_type: 'project',
        'fields.slug': slug,
      });

      const project = res.items[0]?.fields;

      if (!project) {
        notFound();
      }

      return <ProjectDetail project={project} />;
    }