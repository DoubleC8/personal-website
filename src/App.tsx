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

      <main className="grow">
        <p>main content</p>
      </main>

      <footer>
        <p>© 2026 Company Name</p>
      </footer>
    </div>
  );
}

export default App;
