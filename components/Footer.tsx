export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Fauzaan Hafeez. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/fauzaan-h-sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:fauzaanhafeez@icloud.com"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

