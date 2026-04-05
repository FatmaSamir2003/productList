import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-center gap-8 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-blue-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-blue-300"
          }
        >
          Tasks
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-blue-300"
          }
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
