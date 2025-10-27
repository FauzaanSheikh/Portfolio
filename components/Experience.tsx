export default function Experience() {
  const experiences = [
    {
      title: 'Lead Software Engineer',
      company: 'VetDrive',
      location: 'Remote | Ireland',
      period: 'Feb 2025 – Present',
      description: [
        'Led the end-to-end development lifecycle for a distributed engineering team',
        'Drove GDPR and ISO27001 compliance initiatives, ensuring robust data security and regulatory alignment',
        'Spearheaded integration efforts with external healthcare partners to expand platform capabilities',
        'Implemented AWS Textract to automate invoice and billing data extraction, reducing manual entry time and effort by 70%',
      ],
      tech: ['AWS', 'Node.js (Express)', 'MongoDB', 'Azure', 'Backbone.js'],
    },
    {
      title: 'Director of Engineering',
      company: 'Contrivers',
      location: 'Hybrid | Sweden & Pakistan',
      period: 'Jan 2023 – Jan 2025',
      description: [
        'Led a major modernization project for Hemavi, a Sweden-based startup, upgrading Angular from v11 to v16 with zero downtime',
        'Integrated AI-driven features, including image recognition and geo-tagging, using OpenAI APIs to enhance product functionality',
        'Architected and delivered the EPS RIMS pharmaceutical system using Next.js, Hono.js, and PostgreSQL',
        'Deployed and managed cloud infrastructure on AWS and Docker, achieving 99.9% uptime and high availability',
        'Mentored junior engineers and established coding standards, improving overall team delivery velocity by 20%',
      ],
      tech: ['AWS', 'Node.js (Express, Hono)', '.NET C#', 'MongoDB/MySQL', 'Angular (11–16)'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Fieldforce',
      location: 'Hybrid | Pakistan & USA',
      period: 'May 2019 – Jan 2023',
      description: [
        'Designed and developed core platform modules supporting deployments across the US, Europe, Middle East, and Asia',
        'Engineered a bulk operations engine for sites, assets, and work orders, cutting manual effort by 70%',
        'Built the Sites Module, which became the foundational component for platform-wide data relationships',
        'Delivered a new project management module enabling site-level activity tracking',
      ],
      tech: ['Angular 13', '.NET C#', 'MySQL', 'Azure'],
    },
    {
      title: 'Software Engineer',
      company: 'CureMD',
      location: 'On-Site | Pakistan & USA',
      period: 'Dec 2017 – May 2019',
      description: [
        'Designed the Interface-Hub for processing healthcare integration requests',
        'Implemented multiple HL7 v2/v3 message types (VXU, SIU, QBP, ADT, DFT) to ensure seamless communication with healthcare partners',
        'Developed RESTful APIs to enable integration with health exchange partners',
        'Led integrations with US state registries to ensure compliance with national healthcare standards',
      ],
      tech: ['Angular', '.NET', 'MS SQL Server'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">{exp.location}</p>
                  </div>
                  <span className="text-zinc-600 dark:text-zinc-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-zinc-600 dark:text-zinc-400">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

