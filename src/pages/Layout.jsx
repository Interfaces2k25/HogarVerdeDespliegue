function Layout({ children }) {
  return (
    <>
      <main
        id="main-content"
        role="main"
        className="min-h-screen bg-linear-to-br flex flex-col items-center justify-center p-8"
      >
        <section
          aria-labelledby="main-section-title"
          className="w-full max-w7xl"
        >
          {children}
        </section>
      </main>
    </>
  );
}

export default Layout;

