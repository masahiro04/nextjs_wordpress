import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ word = "", setWord, handleSearch }) => (
  <div className="relative text-sky-100 focus-within:text-gray-400 border rounded-lg">
    <div className="flex items-center justify-center">
      <div className="flex border-2 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Search..."
          onChange={(e) => setWord(e.target.value)}
          value={word === "" ? undefined : word}
        />
        <button
          className="flex items-center justify-center px-4 border-l"
          onClick={handleSearch}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>

    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <div className="relative text-sky-100 focus-within:text-gray-400 border rounded-lg">
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
      </div>
      <input
        onChange={(e) => setWord(e.target.value)}
        id="search"
        name="search"
        value={word === "" ? undefined : word}
        className="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
        placeholder="Search"
        type="search"
      />
    </div>
  </div>
);

export default Search;
