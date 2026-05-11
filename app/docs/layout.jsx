import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '../../lib/source';

export default function Layout({ children }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: '⚡ OptimaAi Docs',
        githubUrl: 'https://github.com/your-org/optimaai',
      }}
    >
      {children}
    </DocsLayout>
  );
}
