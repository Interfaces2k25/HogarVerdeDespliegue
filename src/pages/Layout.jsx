/**
 * Layout component that wraps its children in a main section.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
function Layout({ children }) {
  return (
    <>
      <main
        id="main-content"
        role="main"
        className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto bg-linear-to-br"
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

