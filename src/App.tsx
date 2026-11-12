function App() {
  return (
    <div className="flex min-h-screen w-full flex-col p-6">
      <nav className="w-full flex justify-between">
        <a className="transition-colors duration-300 hover:text-(--accent) cursor-pointer">
          work
        </a>
        <a className="transition-colors duration-300 hover:text-(--accent) cursor-pointer">
          cv
        </a>
        <a className="transition-colors duration-300 hover:text-(--accent) cursor-pointer">
          say hi
        </a>
      </nav>

      <main className="grow flex items-center justify-center">
        <img src="/src/assets/me.jpg" className="w-25 h-25" alt="me" />
      </main>

      <footer className="flex gap-3 justify-center">
        <a
          className="transition-colors duration-300 hover:text-(--accent) cursor-pointer"
          href="https://github.com/DoubleC8"
          target="_blank"
        >
          github
        </a>
        <p> / </p>
        <a
          className="transition-colors duration-300 hover:text-(--accent) cursor-pointer"
          href="https://www.linkedin.com/in/chris-cortes-45b7b6280/"
          target="_blank"
        >
          linkedin
        </a>
      </footer>
    </div>
  );
}

export default App;
