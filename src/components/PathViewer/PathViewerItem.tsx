import Link from "next/link";
import { snakeCase } from "lodash";

interface PathViewerItemProps {
  children: React.ReactNode;
  to: string;
  selected?: boolean;
}

const PathViewerItem = ({ children, to, selected }: PathViewerItemProps) => {
  const itemTextInSnakeCase = snakeCase(children?.toString() ?? "");
  const path = selected ? "#" : (to || `#${itemTextInSnakeCase}`);

  return (
    <>
      <li className="flex items-center">
        {selected ? (
          <span className="text-gray-500 font-medium text-sm" aria-current="page">
            {children}
          </span>
        ) : (
          <Link 
            href={path}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            {children}
          </Link>
        )}
      </li>
      {!selected && (
        <li className="flex items-center">
          <svg
            className="w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </li>
      )}
    </>
  );
};

export default PathViewerItem;
