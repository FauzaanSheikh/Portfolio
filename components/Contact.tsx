export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl">
          <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I'm always open to discussing new opportunities, collaborations, or just having a
            conversation about technology and innovation. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:fauzaanhafeez@icloud.com"
              className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Email</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center break-all">
                fauzaanhafeez@icloud.com
              </p>
            </a>
            <a
              href="tel:+16476336494"
              className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Phone</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                (647)-633-6494
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/fauzaan-h-sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">LinkedIn</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                /in/fauzaan-h-sheikh
              </p>
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              📍 3525 Kariya Dr. (L5B 0C2), Mississauga, ON, Canada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

