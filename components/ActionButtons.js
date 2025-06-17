import { FaGithub } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";

export default function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-1 text-xs font-medium">
      {/* Jupyter Button */}
      <a
        href="https://your-jupyter-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex rounded overflow-hidden border border-gray-600"
      >
        <span className="flex items-center px-1.5 py-0.5 bg-gray-800 text-white">
          <SiJupyter className="mr-1 h-3 w-3" />
          Jupyter
        </span>
        <span className="px-2 py-0.5 bg-blue-500 text-white hover:bg-blue-600">
          Open Notebook
        </span>
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex rounded overflow-hidden border border-gray-600"
      >
        <span className="flex items-center px-1.5 py-0.5 bg-gray-800 text-white">
          <FaGithub className="mr-1 h-3 w-3" />
          GitHub
        </span>
        <span className="px-2 py-0.5 bg-blue-500 text-white hover:bg-blue-600">
          View on GitHub
        </span>
      </a>
    </div>
  );
}
