export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <header>
        <nav className="w-full flex justify-between">
          <a>work</a>
          <a>cv →</a>
          <a>say hi</a>
        </nav>
      </header>
      {/* Main Canvas */}
      <main className="grow"></main>
      <footer className="flex justify-center gap-3">
        <a
          href="https://github.com/DoubleC8"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p>/</p>
        <a
          href="https://www.linkedin.com/in/chris-cortes-45b7b6280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
