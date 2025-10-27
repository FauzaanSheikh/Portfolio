'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-100">
            Fauzaan Hafeez
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400">
            Senior Software Engineer & Technical Lead
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            8+ years of experience designing and delivering scalable, full-stack solutions across
            healthcare, telecom, and e-commerce sectors. Proven ability to lead engineering teams,
            architect cloud-native platforms, and integrate AI-driven solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://www.linkedin.com/in/fauzaan-h-sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Connect on LinkedIn
            </a>
            <a
              href="mailto:fauzaanhafeez@icloud.com"
              className="px-8 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors font-semibold shadow-lg hover:shadow-xl border border-zinc-200 dark:border-zinc-700"
            >
              Get in Touch
            </a>
          </div>
          <div className="pt-4 text-zinc-600 dark:text-zinc-400">
            <p>📍 Mississauga, ON, Canada | 📧 fauzaanhafeez@icloud.com | 📱 (647)-633-6494</p>
          </div>
        </div>
      </div>
    </section>
  );
}

