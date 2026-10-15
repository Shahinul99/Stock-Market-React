import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar bg-base-200 px-6 shadow-md">
      <span className="text-xl font-bold">Stock Tracker</span>
      <div className="ml-auto">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;