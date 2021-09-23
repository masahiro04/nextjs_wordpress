import Link from 'next/link';

const Categories = ({ categories }): JSX.Element => (
  <span className="ml-1">
    { categories.edges.length > 0
      ? categories.edges.map((category) => (
        <Link href={`/?categoryName=${category.node.name}`}>
          <a href="#">
            <button
              type="button"
              className="ml-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium
                          rounded shadow-sm text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2
                          focus:ring-offset-2 focus:bg-indigo-700"
            >
              { category.node.name }
            </button>
          </a>
        </Link>
      ))
      : <></> }
  </span>
);

export default Categories;
