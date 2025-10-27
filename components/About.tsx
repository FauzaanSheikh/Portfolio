export default function About() {
  const highlights = [
    'Delivered modernization projects impacting 100+ enterprise users with zero downtime',
    'Improved engineering team velocity by 20% through standardized processes and mentorship',
    'Achieved 99.9% system uptime across distributed cloud infrastructure on AWS and Azure',
    'Implemented GDPR-compliant AI automation that reduced manual billing time by 70%',
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Professional Summary
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Senior Software Engineer and Technical Lead with 8+ years of experience designing and
              delivering scalable, full-stack solutions across healthcare, telecom, and e-commerce
              sectors. Proven ability to lead engineering teams, architect cloud-native platforms,
              and integrate AI-driven solutions.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Track record of delivering enterprise-grade applications, driving performance
              optimization, and leading compliance with GDPR and ISO27001 standards.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Key Highlights
            </h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

