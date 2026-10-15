import PropTypes from "prop-types";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-ghost transition-transform duration-300 hover:rotate-12"
    >
      {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;