export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Invoice Automation',
      company: 'VetDrive',
      description:
        'Implemented AWS Textract OCR solution to automate invoice and billing data extraction, reducing manual data entry time by 70%. Integrated with existing billing systems and implemented GDPR-compliant data handling.',
      tech: ['AWS Textract', 'Node.js', 'MongoDB', 'Express.js'],
      impact: '70% reduction in manual effort',
    },
    {
      title: 'Angular Modernization Project',
      company: 'Hemavi (via Contrivers)',
      description:
        'Led complete Angular upgrade from v11 to v16 for a Sweden-based healthcare startup. Achieved zero downtime during migration, refactored legacy code, and implemented modern best practices.',
      tech: ['Angular 11-16', 'TypeScript', 'RxJS', 'NgRx'],
      impact: 'Zero downtime migration for 100+ users',
    },
    {
      title: 'EPS RIMS Pharmaceutical System',
      company: 'Contrivers',
      description:
        'Architected and delivered a comprehensive pharmaceutical management system from ground up. Implemented real-time inventory tracking, compliance reporting, and multi-tenant architecture.',
      tech: ['Next.js', 'Hono.js', 'PostgreSQL', 'AWS', 'Docker'],
      impact: '99.9% uptime, multi-region deployment',
    },
    {
      title: 'AI-Driven Image Recognition & Geo-Tagging',
      company: 'Contrivers',
      description:
        'Integrated OpenAI APIs to provide intelligent image recognition and automatic geo-tagging capabilities. Enhanced product functionality with ML-powered features.',
      tech: ['OpenAI API', 'Node.js', 'Image Processing', 'Geolocation APIs'],
      impact: 'Enhanced product capabilities with AI',
    },
    {
      title: 'Bulk Operations Engine',
      company: 'Fieldforce',
      description:
        'Engineered high-performance bulk operations system for sites, assets, and work orders. Enabled batch processing of thousands of records with optimized database queries and background job processing.',
      tech: ['Angular 13', '.NET C#', 'MySQL', 'Azure'],
      impact: '70% reduction in manual effort',
    },
    {
      title: 'Healthcare HL7 Interface Hub',
      company: 'CureMD',
      description:
        'Designed and implemented interface hub for processing healthcare integration requests. Supported multiple HL7 v2/v3 message types and ensured compliance with US healthcare standards.',
      tech: ['Angular', '.NET', 'HL7 v2/v3', 'MS SQL Server'],
      impact: 'Seamless integration with US state registries',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {project.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{project.company}</p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                  {project.impact}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

