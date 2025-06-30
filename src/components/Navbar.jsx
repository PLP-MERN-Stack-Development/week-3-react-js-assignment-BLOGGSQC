import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 transition duration-300"
        >
          About
        </Link>
        <a
          href="#contact"
          className="ml-4 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
