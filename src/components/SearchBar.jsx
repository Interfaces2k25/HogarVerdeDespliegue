/**
 * SearchBar component for searching items.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.searchTerm - The current search term.
 * @param {function} props.onSearchChange - Callback function to handle search term changes.
 * @param {string} [props.placeholder="Buscar..."] - Placeholder text for the input field.
 * @returns {JSX.Element} The rendered SearchBar component.
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
    return (
        <div className="w-full max-w-lg mx-auto mb-8">
            <label htmlFor="search-input" className="sr-only">
                {placeholder}
            </label>
            <input
                id="search-input"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                // Llama a la función proporcionada por el padre en cada cambio
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full p-3 border-2  border-[var(--color-primary)] rounded-lg shadow-inner
    focus:outline-none focus:ring-2 focus:ring-[var(--color-info)] focus:border-[var(--color-info)] transition
    duration-150 ease-in-out bg-[var(--color-secondary)] text-[var(--color-primary)]" aria-label={placeholder}
            />
        </div>
    );
}
export default SearchBar;
