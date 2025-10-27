export default function Education() {
  const education = [
    {
      degree: 'BS (Hons) Computer Systems Engineering',
      institution: 'Lancaster University',
      location: 'UK',
      period: '2013 – 2017',
      icon: '🎓',
    },
    {
      degree: 'OTHM Level 7 Diploma in Project Management',
      institution: 'UK Versity',
      location: 'UK',
      period: '2023 – 2024',
      icon: '📚',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{edu.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                {edu.institution}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {edu.location} | {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

