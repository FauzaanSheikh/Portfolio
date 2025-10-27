export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['Angular (v11–v16)', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React', 'Next.js'],
      icon: '🎨',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Hono.js', '.NET', 'C#', 'REST APIs', 'HL7 v2/v3'],
      icon: '⚙️',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'MS SQL Server'],
      icon: '💾',
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'DigitalOcean', 'Docker', 'CI/CD'],
      icon: '☁️',
    },
    {
      title: 'AI & Automation',
      skills: ['OpenAI API Integration', 'AWS Textract OCR', 'Image Processing', 'Tagging'],
      icon: '🤖',
    },
    {
      title: 'Leadership & Compliance',
      skills: ['Agile/Scrum', 'Team Mentorship', 'GDPR', 'ISO27001'],
      icon: '👥',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
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

